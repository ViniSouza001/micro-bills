const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transacao = new Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    },
    item: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    formaPagto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("transacoes", transacao)