const mongoose = require('mongoose')
const express = require('express')
require('../models/Transacoes')
const Transacao = mongoose.model('transacoes')

const listarTransacao = async (req, res) => {
   try {
      const { usuarioId, mes } = req.body
      const transacoes = await Transacao.find({ usuarioId: usuarioId, "mes": mes }).lean()
      if (!transacoes || transacoes.length == 0) {
         return res.status(404).json({ success: false, message: "Não há transações para serem listadas" }).end()
      }
      return res.status(200).json({ success: true, transacoes }).end()
   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno: " + error })
   }
}

const cadastrarTransacao = async (req, res) => {
   try {
      const { usuarioId, valorUnitario, item, quantidade, formaPagto, tipo } = req.body
      var erros = []

      if (!valorUnitario || typeof valorUnitario === undefined || valorUnitario === null) {
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
         "valor": valorUnitario * quantidade,
         "item": item,
         "quantidade": quantidade,
         "formaPagto": formaPagto,
         "tipo": tipo,
         "dia": new Date().getDate(),
         "mes": new Date().getMonth() + 1,
         "ano": new Date().getFullYear()
      })
      await novaTransacao.save()

      return res.status(200).json({ success: true, message: "Transação criada com sucesso" }).end()
   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno ao criar a transação: " + error }).end()
   }
}

function separaMetodos (transacoes, isLucro) {
   if (isLucro) {
      var valorTotalPix = 0
      var valorTotalCartao = 0
      var valorTotalDinheiro = 0
   }
   var valorTotal = 0

   transacoes.forEach((transacao) => {
      console.log(transacao)
      if (transacao.tipo == "Venda") valorTotal += transacao.valor
      else valorTotal -= transacao.valor

      if (isLucro) {
         if (transacao.formaPagto == 'Pix') valorTotalPix += transacao.valor
         else if (transacao.formaPagto == 'Cartao') valorTotalCartao += transacao.valor
         else valorTotalDinheiro += transacao.valor
      }
   })

   return { valorTotalPix, valorTotalCartao, valorTotalDinheiro, valorTotal }
}

const lucroVendas = async (req, res) => {
   try {
      const { usuarioId, mes } = req.body;

      const transacoes = await Transacao.find({ usuarioId: usuarioId, "mes": mes }).lean()
      const lucro = separaMetodos(transacoes, false)

      return res.status(200).json({ success: true, lucro }).end()

   } catch (error) {
      console.log("Houve um erro ao consultar os lucros ganhos")
      return res.status(400).json({ success: false, message: error }).end()
   }
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
      const valores = separaMetodos(transacoes, true)

      return res.status(200).json({ success: true, transacoes, valores }).end()

   } catch (error) {
      return res.status(500).json({ success: false, message: "Houve um erro interno: " + error }).end()
   }
}

const faturamentoMensal = async (req, res) => {
   try {
      var faturamento = 0
      const { usuarioId, mes } = req.body
      const vendas = await Transacao.find({ "usuarioId": usuarioId, "tipo": "Venda", "mes": mes }).lean()
      if (!vendas) {
         return res.status(404).json({ success: false, message: "Erro ao pesquisar faturamento" }).end()
      }
      vendas.forEach((venda) => {
         faturamento += venda.valor
      })

      faturamento = faturamento.toFixed(2)
      return res.status(200).json({ success: true, faturamento }).end()
   } catch (error) {
      return res.status(500).json({ success: false, message: `Não foi possível pesquisar o faturamento: ${error}` }).end()
   }
}

const faturamentoSemanal = async (req, res) => {
   const { usuarioId } = req.body
   const hoje = new Date()

   // primeiro dia da semana (domingo)
   const primeiroDiaSemana = new Date(hoje)
   primeiroDiaSemana.setDate(hoje.getDate() - hoje.getDay())

   // obter o último dia da semana (sábado)
   const ultimoDiaSemana = new Date(hoje)
   ultimoDiaSemana.setDate(hoje.getDate() + (6 - hoje.getDay()))

   // logs
   console.log(hoje.getDate());
   console.log(ultimoDiaSemana.getDate())

   Transacao.find({
      "dia": { $gt: primeiroDiaSemana.getDate(), $lt: ultimoDiaSemana.getDate() },
      "mes": hoje.getMonth() + 1,
      "ano": hoje.getFullYear(),
      "usuarioId": usuarioId
   }).lean()
      .then((transacoes) => {
         return res.status(200).json({ success: true, transacoes }).end()
      })
      .catch((error) => {
         return res.status(404).json({ success: false, message: `Não foi possível pesquisar o faturamento semanal: ${error}` }).end()
      })
}

module.exports = {
   cadastrarTransacao,
   listarTransacao,
   infoVendas,
   lucroVendas,
   faturamentoMensal,
   faturamentoSemanal
}