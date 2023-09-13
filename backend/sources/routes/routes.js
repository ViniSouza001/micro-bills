const express = require('express')
const router = express.Router()
const control = require("../controllers/control")

router.get("/teste", control.teste)

module.exports = router