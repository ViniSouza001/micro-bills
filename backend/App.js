const express = require('express')
const app = express()
const db = "mongodb://0.0.0.0:/microbills"
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
const cors = require('cors')
const router = require("./sources/routes/routes")

// configurações
// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

// Mongoose
mongoose.Promise = global.Promise
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conectado ao banco MongoDB"))
    .catch((error) => console.log("Não foi possível conectar ao banco: " + error))

// rotas 
app.use(router)

const PORT = 8081
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))