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
    dia: {
        type: Number,
        required: true
    },
    mes: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }
})

mongoose.model("transacoes", transacao)