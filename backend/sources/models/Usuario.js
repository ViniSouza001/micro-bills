const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

mongoose.model("usuarios", usuario)