const express = require('express')
const router = express.Router()
const control = require("../controllers/control")

router.get("/teste", control.teste)

router.post("/cadastro", control.criarConta)
router.get("/usuarios", control.listarUsuarios)

router.post("/login", control.login)
router.get("/logout", control.logout)

router.post('/listarTransacao/', control.listarTransacao)
router.post('/cadastrarTransacao', control.cadastrarTrasacao)


// apenas para teste
// router.get("/erro", (req, res) => {
//     res.send("Houve um erro")
// })

// router.get("/sucesso", (req, res) => {
//     res.status(200).json({ "message": "Sucesso!!" }).end()
// })

module.exports = router