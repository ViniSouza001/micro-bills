const express = require('express')
const router = express.Router()
const transacaoControl = require('../controllers/transacoes')
const control = require("../controllers/control")

router.get("/teste", control.teste)

router.post("/cadastro", control.criarConta)
router.get("/usuarios", control.listarUsuarios)

router.post("/login", control.login)
router.get("/logout", control.logout)

router.post('/listarTransacao', transacaoControl.listarTransacao)
router.post('/cadastrarTransacao', transacaoControl.cadastrarTransacao)
router.post("/infoVendas", transacaoControl.infoVendas)
router.post('/lucroVendas', transacaoControl.lucroVendas)
router.post('/faturamentoMensal', transacaoControl.faturamentoMensal)


// apenas para teste

// router.get("/erro", (req, res) => {
//     res.status(400).json({ "message": "Usuário ou senha incorreta" }).end()
// })

// router.get("/sucesso", (req, res) => {
//     res.status(200).end()
// })

module.exports = router