const mongoose = require('mongoose')
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')
const bcrypt = require('bcryptjs')
const passport = require('passport')

const teste = (req, res) => {
    res.send("Uma mensagem para teste")
}

const listarUsuarios = (req, res) => {
    Usuario.find().lean().then((usuarios) => {
        res.status(200).json(usuarios).end()
    }).catch((error) => {
        res.status(400).json(error).end()
    })
}

const criarConta = (req, res) => {
    const { nome, nascimento, email, senha, confirmarSenha } = req.body
    var erros = []


    if (!nome || typeof nome === undefined || nome === null) {
        erros.push({ texto: "Nome inválido" })
    }
    if (!nascimento || typeof nascimento === undefined || nascimento === null) {
        erros.push({ texto: "Data de nascimento inválida" })
    }
    if (!email || typeof email === undefined || email === null) {
        erros.push({ texto: "E-mail inválido" })
    }
    if (!senha || typeof senha === undefined || senha === null) {
        erros.push({ texto: "Senha inválida" })
    }
    if (senha.length < 4 || confirmarSenha.length < 4) {
        erros.push({ texto: "As senhas devem ter no mínimo 4 dígitos" })
    }
    if (!confirmarSenha || typeof confirmarSenha === undefined || confirmarSenha === null || confirmarSenha !== senha) {
        erros.push({ texto: "Confirmação de senha não confere" })
    }

    if (erros.length > 0) {
        return res.status(400).json({ success: false, erros: erros }).end()
    }

    Usuario.findOne({ email: email }).lean().then((encontrado) => {
        if (encontrado) {
            return res.status(400).json({ success: false, erro: "Já existe um usuário com este e-mail" }).end()
        } else {
            const novoUsuario = new Usuario({
                nome: nome,
                email: email,
                senha: senha,
                nascimento: nascimento
            })

            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                    if (erro) {
                        res.status(400).json({ erro: "Houve um erro ao salvar o usuário: " + erro })
                    }

                    novoUsuario.senha = hash

                    novoUsuario.save().then(() => {
                        res.status(400).json({ success: true, message: "Usuário criado com sucesso" })
                    }).catch((error) => {
                        res.status(400).json({ sucess: false, message: "Não foi possível criar o usuário: " + error })
                    })
                })
            })
        }
    }).catch((error) => {
        console.log("There was an internal error: " + error)
    })

    // return res.status(200).json({ success: true, message: "Conta criada com sucesso!" }).end()
}


module.exports = {
    teste,
    criarConta,
    listarUsuarios
}