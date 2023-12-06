const express = require("express");
const router = express.Router();
const transacaoControl = require("../controllers/transacoes");
const control = require("../controllers/control");

// login / criar conta
router.post("/cadastro", control.criarConta);
router.get("/usuarios", control.listarUsuarios);

// usuario
router.post("/login", control.login);
router.get("/logout", control.logout);
router.post("/infoUsuario", control.infoUsuarios);
router.post("/update", control.alterarDados);

// transacoes
router.post("/listarTransacao", transacaoControl.listarTransacao);
router.post("/cadastrarTransacao", transacaoControl.cadastrarTransacao);
router.post("/lucroVendas", transacaoControl.lucroVendas);
router.post("/faturamentoDiario", transacaoControl.faturamentoDiario);
router.post("/faturamentoSemanal", transacaoControl.faturamentoSemanal);
router.post("/faturamentoMensal", transacaoControl.faturamentoMensal);
router.post("/excluir", transacaoControl.excluir);
router.post("/alterar", transacaoControl.alterar);

module.exports = router;
