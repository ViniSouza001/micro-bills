const mongoose = require('mongoose')
require('../models/Usuario')
require('../models/Transacoes')
const Transacao = mongoose.model('transacoes')
const Usuario = mongoose.model('usuarios')
const bcrypt = require('bcryptjs')
const passport = require('passport')

const teste = (req, res) => {
    res.json({ "message": "Uma mensagem para teste" })
}

const listarUsuarios = (req, res) => {
    Usuario.find().lean().then((usuarios) => {
        res.status(200).json(usuarios).end()
    }).catch((error) => {
        res.status(400).json(error).end()
    })
}

const criarConta = async (req, res) => {
    try {
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

        const encontrado = await Usuario.findOne({ email: email }).lean()

        if (encontrado) {
            return res.status(400).json({ success: false, erro: "Já existe um usuário com este e-mail" }).end()
        }

        const novoUsuario = new Usuario({
            nome: nome,
            email: email,
            senha: senha,
            nascimento: nascimento
        })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(novoUsuario.senha, salt)
        novoUsuario.senha = hash
        await novoUsuario.save()

        return res.status(200).json({ success: true, message: "Usuário criado com sucesso" }).end()

    } catch (error) {
        console.log("Erro interno: " + error)
        return res.status(500).json({ success: false, error: "Ocorreu um erro interno" }).end()
    }

}

const login = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Erro durante a autenticação: " + err })
        }

        if (!user) {
            return res.status(401).json({ success: false, message: info })
        }

        return res.status(200).json({ success: true, user: user })
    })(req, res, next)
}

const logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err) }
        res.json({ "message": "Deslogado com sucesso" })
    })
}

const listarTransacao = async (req, res) => {
    try {
        const { usuarioId } = req.body
        const transacoes = await Transacao.find({ clienteId: usuarioId }).lean()
        if (!transacoes) {
            return res.status(404).json({ success: false, message: "Não há transações para serem listadas: " + transacoes }).end()
        }
        console.log(transacoes)
        return res.status(200).json({ success: true, transacoes }).end()
    } catch (error) {
        return res.status(500).json({ success: false, message: "Houve um erro interno: " + error })
    }
}

const cadastrarTrasacao = async (req, res) => {
    try {
        const { clienteId, valor, formaPagto, tipo } = req.body
        var erros = []

        if (!valor || typeof valor === undefined || valor === null) {
            erros.push({ texto: "Preço inválido" })
        }

        if (!formaPagto || typeof formaPagto === undefined || formaPagto === null) {
            erros.push({ texto: "Preço inválido" })
        }

        if (!tipo || typeof tipo === undefined || tipo === null) {
            erros.push({ texto: "Preço inválido" })
        }

        if (erros.length !== 0) {
            return res.status(400).json({ success: false, erros: erros }).end()
        }

        const novaTransacao = new Transacao({
            "clienteId": clienteId,
            "valor": valor,
            "formaPagto": formaPagto,
            "tipo": tipo,
            "dia": new Date().getDate(),
            "mes": new Date().getMonth(),
            "ano": new Date().getFullYear()
        })
        await novaTransacao.save()

        return res.status(200).json({ success: true, message: "Transação criada com sucesso" }).end()
    } catch (error) {
        return res.status(500).json({ success: false, message: "Houve um erro interno ao criar a transação" }).end()
    }
}


module.exports = {
    teste,
    criarConta,
    listarUsuarios,
    login,
    logout,
    cadastrarTrasacao,
    listarTransacao
}