const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itens = new Schema({
    item: {
        type: Array,
        required: true
    },
    quantidade: {
        type: Array,
        required: true
    },
    preco: {
        type: Array,
        required: true
    },
    formaPagamento: {
        type: String,
        required: true
    }
})

mongoose.model("itens", itens)