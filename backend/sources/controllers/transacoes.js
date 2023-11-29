const mongoose = require("mongoose");
require("../models/Transacoes");
const Transacao = mongoose.model("transacoes");

const listarTransacao = async (req, res) => {
  try {
    const hoje = new Date();
    const { usuarioId, mes } = req.body;
    const transacoes = await Transacao.find({
      usuarioId: usuarioId,
      data: {
        $gte: new Date(hoje.getFullYear(), mes, hoje.getDate(), 0, 0, 0),
        $lte: new Date(hoje.getFullYear(), mes, hoje.getDate(), 23, 59, 59),
      },
    }).lean();
    if (!transacoes || transacoes.length == 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Não há transações para serem listadas",
        })
        .end();
    }
    return res.status(200).json({ success: true, transacoes }).end();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Houve um erro interno: " + error });
  }
};

const cadastrarTransacao = async (req, res) => {
  try {
    const { usuarioId, valorUnitario, item, quantidade, formaPagto, tipo } =
      req.body;
    var erros = [];

    if (
      !valorUnitario ||
      typeof valorUnitario === undefined ||
      valorUnitario === null
    ) {
      erros.push({ texto: "Preço inválido" });
    }

    if (!item || typeof item === undefined || item === null) {
      erros.push({ texto: "Você deve informar um nome ao item" });
    }

    if (
      !quantidade ||
      typeof quantidade === undefined ||
      quantidade === null ||
      quantidade == 0
    ) {
      erros.push({ texto: "A quantidade deve ser no mínimo 1" });
    }

    if (!formaPagto || typeof formaPagto === undefined || formaPagto === null) {
      erros.push({ texto: "Você deve informar uma forma de pagamento" });
    }

    if (!tipo || typeof tipo === undefined || tipo === null) {
      erros.push({ texto: "Você deve informar o tipo da transação" });
    }

    if (erros.length !== 0) {
      return res.status(400).json({ success: false, erros: erros }).end();
    }

    const novaTransacao = new Transacao({
      usuarioId: usuarioId,
      valor: valorUnitario * quantidade,
      item: item,
      quantidade: quantidade,
      formaPagto: formaPagto,
      tipo: tipo,
    });
    await novaTransacao.save();

    return res
      .status(200)
      .json({ success: true, message: "Transação criada com sucesso" })
      .end();
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Houve um erro interno ao criar a transação: " + error,
      })
      .end();
  }
};

function separaMetodos(transacoes, isLucro) {
  if (isLucro) {
    var valorTotalPix = 0;
    var valorTotalCartao = 0;
    var valorTotalDinheiro = 0;
  }
  var valorTotal = 0;

  transacoes.forEach((transacao) => {
    console.log(transacao);
    if (transacao.tipo == "Venda") valorTotal += transacao.valor;
    else valorTotal -= transacao.valor;

    if (isLucro) {
      if (transacao.formaPagto == "Pix") valorTotalPix += transacao.valor;
      else if (transacao.formaPagto == "Cartao")
        valorTotalCartao += transacao.valor;
      else valorTotalDinheiro += transacao.valor;
    }
  });

  return { valorTotalPix, valorTotalCartao, valorTotalDinheiro, valorTotal };
}

const lucroVendas = async (req, res) => {
  try {
    const { usuarioId, mes } = req.body;

    const transacoes = await Transacao.find({
      usuarioId: usuarioId,
      data: {
        $gt: `2023-${mes}-01T00:00:00.000Z`,
        $lt: `2023-${mes}-31T00:00:00.000Z`,
      },
    }).lean();
    const lucro = separaMetodos(transacoes, false);

    return res.status(200).json({ success: true, lucro }).end();
  } catch (error) {
    console.log("Houve um erro ao consultar os lucros ganhos");
    return res.status(400).json({ success: false, message: error }).end();
  }
};

const faturamentoDiario = async (req, res) => {
  try {
    const { usuarioId } = req.body;
    const hoje = new Date();
    const transacoes = await Transacao.find({
      usuarioId: usuarioId,
      tipo: "Venda",
      data: {
        $gte: new Date(
          hoje.getFullYear(),
          hoje.getMonth(),
          hoje.getDate(),
          0,
          0,
          0
        ),
        $lte: new Date(
          hoje.getFullYear(),
          hoje.getMonth(),
          hoje.getDate(),
          23,
          59,
          59
        ),
      },
    });

    if (transacoes.length == 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Não há transações para serem listadas",
        })
        .end();
    }
    const valores = separaMetodos(transacoes, true);

    return res.status(200).json({ success: true, transacoes, valores }).end();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Houve um erro interno: " + error })
      .end();
  }
};

const faturamentoMensal = async (req, res) => {
  try {
    var faturamento = 0;
    const { usuarioId, mes } = req.body;
    const vendas = await Transacao.find({
      usuarioId: usuarioId,
      tipo: "Venda",
      data: {
        $gte: new Date(
          hoje.getFullYear(),
          hoje.getMonth(),
          hoje.getDate(),
          0,
          0,
          0
        ),
        $lte: new Date(
          hoje.getFullYear(),
          hoje.getMonth(),
          hoje.getDate(),
          23,
          59,
          59
        ),
      },
    }).lean();
    if (!vendas) {
      return res
        .status(404)
        .json({ success: false, message: "Erro ao pesquisar faturamento" })
        .end();
    }

    vendas.forEach((venda) => {
      faturamento += venda.valor;
    });

    faturamento = faturamento.toFixed(2);
    return res.status(200).json({ success: true, faturamento }).end();
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: `Não foi possível pesquisar o faturamento: ${error}`,
      })
      .end();
  }
};

const faturamentoSemanal = async (req, res) => {
  const { usuarioId } = req.body;
  const hoje = new Date();

  // Primeiro dia da semana (domingo)
  const primeiroDiaSemana = new Date(hoje);
  primeiroDiaSemana.setDate(hoje.getDate() - hoje.getDay());

  // Último dia da semana (sábado)
  const ultimoDiaSemana = new Date(hoje);
  ultimoDiaSemana.setDate(hoje.getDate() + (6 - hoje.getDay()));

  Transacao.find({
    usuarioId: usuarioId,
    data: {
      $gte: primeiroDiaSemana,
      $lte: ultimoDiaSemana,
    },
  })
    .then((transacoes) => {
      return res.status(200).json({ success: true, transacoes }).end();
    })
    .catch((error) => {
      return res
        .status(404)
        .json({
          success: false,
          message: `Não foi possível pesquisar o faturamento semanal: ${error}`,
        })
        .end();
    });
};

module.exports = {
  cadastrarTransacao,
  listarTransacao,
  faturamentoDiario,
  lucroVendas,
  faturamentoMensal,
  faturamentoSemanal,
};
