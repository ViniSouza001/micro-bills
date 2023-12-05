const mongoose = require("mongoose");
require("../models/Usuario");
require("../models/Transacoes");
const Usuario = mongoose.model("usuarios");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const teste = async (req, res) => {
  const usuarios = await Usuario.find().lean();
  if (!usuarios) {
    return res
      .status(404)
      .json({ success: false, message: "Não há usuários para serem listados" })
      .end();
  }
  return res.status(200).json({ success: true, usuarios }).end();
};

const listarUsuarios = (req, res) => {
  Usuario.find()
    .lean()
    .then((usuarios) => {
      res.status(200).json(usuarios).end();
    })
    .catch((error) => {
      res.status(400).json(error).end();
    });
};

const criarConta = async (req, res) => {
  try {
    const { nome, nascimento, email, senha, confirmarSenha } = req.body;
    var erros = [];

    if (!nome || typeof nome === undefined || nome === null) {
      erros.push({ texto: "Nome inválido" });
    }
    if (!nascimento || typeof nascimento === undefined || nascimento === null) {
      erros.push({ texto: "Data de nascimento inválida" });
    }
    if (!email || typeof email === undefined || email === null) {
      erros.push({ texto: "E-mail inválido" });
    }
    if (!senha || typeof senha === undefined || senha === null) {
      erros.push({ texto: "Senha inválida" });
    }
    if (senha.length < 4 || confirmarSenha.length < 4) {
      erros.push({ texto: "As senhas devem ter no mínimo 4 dígitos" });
    }
    if (
      !confirmarSenha ||
      typeof confirmarSenha === undefined ||
      confirmarSenha === null ||
      confirmarSenha !== senha
    ) {
      erros.push({ texto: "Confirmação de senha não confere" });
    }

    if (erros.length > 0) {
      return res.status(400).json({ success: false, erros: erros }).end();
    }

    const encontrado = await Usuario.findOne({ email: email }).lean();

    if (encontrado) {
      return res
        .status(400)
        .json({ success: false, erro: "Já existe um usuário com este e-mail" })
        .end();
    }

    const novoUsuario = new Usuario({
      nome: nome,
      email: email,
      senha: senha,
      nascimento: nascimento,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(novoUsuario.senha, salt);
    novoUsuario.senha = hash;
    await novoUsuario.save();

    return res
      .status(200)
      .json({ success: true, message: "Usuário criado com sucesso" })
      .end();
  } catch (error) {
    console.log("Erro interno: " + error);
    return res
      .status(500)
      .json({ success: false, error: "Ocorreu um erro interno" })
      .end();
  }
};

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Erro durante a autenticação: " + err,
      });
    }

    if (!user) {
      return res.status(401).json({ success: false, message: info });
    }

    return res.status(200).json({ success: true, user: user });
  })(req, res, next);
};

const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: "Deslogado com sucesso" });
  });
};

const infoUsuarios = async (req, res) => {
  const { usuarioId } = req.body;
  const usuario = await Usuario.findById(usuarioId).lean();
  if (!usuario) {
    return res
      .status(404)
      .json({ success: false, message: "Usuário não encontrado" })
      .end();
  }
  return res.status(200).json({ success: true, usuario }).end();
};

const alterarDados = async (req, res) => {
  const { usuarioId } = req.body;
  Usuario.findById(usuarioId)
    .then(async (user) => {
      if (user) {
        const { nome, nascimento, email, senha, novaSenha } = req.body;

        // errors
        const erros = [];
        if (
          !nome ||
          typeof nome == undefined ||
          nome == undefined ||
          nome.lenght <= 2
        ) {
          erros.push({ texto: "Nome inválido ou muito curto" });
        }

        if (
          !nascimento ||
          typeof nascimento == undefined ||
          nascimento == null
        ) {
          erros.push({ texto: "Data de nascimento inválido" });
        }

        if (
          !email ||
          typeof email == undefined ||
          email == undefined ||
          email.lenght <= 2
        ) {
          erros.push({ texto: "Nome inválido ou muito curto" });
        }

        var encontrado = false;

        if (email == user.email) {
          encontrado = false;
        } else {
          var usuarioExistente = [];
          usuarioExistente = await Usuario.find({ email: email });
          encontrado = true;
          if (encontrado) {
            erros.push({ texto: "Este nome já existe" });
          }
        }

        if (erros.length !== 0) {
          return res.status(400).json({ success: false, erros });
        }

        user.nome = nome;
        user.email = email;
        user.nascimento = nascimento;

        if (senha && novaSenha) {
          const senhaCorreta = await bcrypt.compare(senha, user.senha);

          if (novaSenha.length < 4) {
            return res
              .status(400)
              .json({
                success: false,
                message: "A senha deve ter mais do que 4 dígitos",
              })
              .end();
          }

          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(senha, salt);
          if (senhaCorreta) {
            const newPassword = await bcrypt.hash(novaSenha, salt);
            user.senha = newPassword;
          } else {
            return res
              .status(400)
              .json({
                success: false,
                message: "A senha atual está incorreta",
              })
              .end();
          }
        }

        user
          .save()
          .then(() => {
            return res
              .status(200)
              .json({
                success: true,
                message: "Dados atualizados com sucesso!",
              })
              .end();
          })
          .catch((error) => {
            return res
              .status(400)
              .json({
                success: false,
                message: `Houve um erro ao atualizar os dados: ${error}`,
              })
              .end();
          });
      } else {
        return res
          .status(404)
          .json({
            success: false,
            message: `Não foi possível encontrar o usuário`,
          })
          .end();
      }
    })
    .catch((error) => {
      return res
        .status(404)
        .json({
          success: false,
          message: `Houve um erro ao alterar as informações: ${error}`,
        })
        .end();
    });
};

module.exports = {
  teste,
  criarConta,
  listarUsuarios,
  login,
  logout,
  infoUsuarios,
  alterarDados,
};
