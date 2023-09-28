const express = require('express')
const app = express()
const db = "mongodb://0.0.0.0:/microbills"
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('./sources/config/authentication')(passport)
const cors = require('cors')
const router = require("./sources/routes/routes")

// configurações

// sessão
app.use(session({
    resave: true,
    secret: "microBills",
    saveUninitialized: true
}))

app.use((req, res, next) => {
    if (!req.session) {
        return next(new Error("Houve um erro interno"))
    }
    next()
})

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// middlewares

app.use((req, res, next) => {
    // esse middleware irá criar duas variáveis globais: uma para mensagem de sucesso e outra para erro
    res.locals.error = req.flash("error") // variável global só para o passport
    next()
})

app.use(cors())


// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


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
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ PORT }`))