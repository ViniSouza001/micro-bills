const mongoose = require('mongoose')
require('../models/Transacoes')
const Transacao = mongoose.model('transacoes')

const listarTransacao = async (req, res) => {
   try {
      const { usuarioId } = req.body
      const transacoes = await Transacao.find({ usuarioId: usuarioId }).lean()
      if (!transacoes) {
         return res.status(404).json({ success: false, message: "Não há transações para serem listadas: " + transacoes }).end()
      }
      console.log(transacoes)
      return res.status(200).json({ success: true, transacoes }).end()
   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno: " + error })
   }
}

const cadastrarTransacao = async (req, res) => {
   try {
      const { usuarioId, valor, item, quantidade, formaPagto, tipo } = req.body
      var erros = []

      if (!valor || typeof valor === undefined || valor === null) {
         erros.push({ texto: "Preço inválido" })
      }

      if (!item || typeof item === undefined || item === null) {
         erros.push({ texto: "Você deve informar um nome ao item" })
      }

      if (item.length <= 3) {
         erros.push({ texto: "Nome do item muito curto" })
      }

      if (!quantidade || typeof quantidade === undefined || quantidade === null || quantidade == 0) {
         erros.push({ texto: "A quantidade deve ser no mínimo 1" })
      }

      if (!formaPagto || typeof formaPagto === undefined || formaPagto === null) {
         erros.push({ texto: "Você deve informar uma forma de pagamento" })
      }

      if (!tipo || typeof tipo === undefined || tipo === null) {
         erros.push({ texto: "Você deve informar o tipo da transação" })
      }

      if (erros.length !== 0) {
         return res.status(400).json({ success: false, erros: erros }).end()
      }

      const novaTransacao = new Transacao({
         "usuarioId": usuarioId,
         "valor": valor,
         "item": item,
         "quantidade": quantidade,
         "formaPagto": formaPagto,
         "tipo": tipo,
         "dia": new Date().getDate(),
         "mes": new Date().getMonth(),
         "ano": new Date().getFullYear()
      })
      await novaTransacao.save()

      return res.status(200).json({ success: true, message: "Transação criada com sucesso" }).end()
   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno ao criar a transação: " + error }).end()
   }
}

function separaMetodos () {

   return null
}

const infoVendas = async (req, res) => {
   try {
      const { usuarioId } = req.body
      const transacoes = await Transacao.find({
         "usuarioId": usuarioId,
         "tipo": "Venda",
         "dia": new Date().getDate()
      })

      if (transacoes.length == 0) {
         return res.status(404).json({ success: false, message: "Não há transações para serem listadas" }).end()
      }

      return res.status(200).json({ success: true, transacoes }).end()

   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno: " + error }).end()
   }
}

module.exports = {
   cadastrarTransacao,
   listarTransacao,
   infoVendas
}