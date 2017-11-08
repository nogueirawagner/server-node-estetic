'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    nome: {
        type: String,
        required: true,
    },
    datacriacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['sim', 'nao'],
        default: 'sim'
    }
});

module.exports = mongoose.model('Servico', schema);