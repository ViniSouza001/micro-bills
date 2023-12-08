const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transacao = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  formaPagto: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("transacoes", transacao);

// const Transacao = mongoose.model("transacoes");

// const novaTransacao = new Transacao({
//   usuarioId: "653129e9334d631c3c8a7d0d",
//   item: "Item da transação",
//   quantidade: 1,
//   valor: 100,
//   formaPagto: "Cartao",
//   tipo: "Venda",
//   data: new Date("2023-12-02T00:00:00Z"),
// });

// novaTransacao
//   .save()
//   .then(() => {
//     console.log("transacao criada com sucesso");
//   })
//   .catch((error) => {
//     console.log(`Transacao nao criada: ${error}`);
//   });
