const mongoose = require('mongoose')

const Festa = mongoose.model('Festa', {
    nome: String,
    convidados: Number,
    local: String,
    decoracao: String,
    buffet: String
})


module.exports = Festa