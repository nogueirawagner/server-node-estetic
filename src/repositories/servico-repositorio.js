'use strict';

const mongoose = require('mongoose');
const example = mongoose.model('Servico');

// Criar novo 
exports.Inserir = async (data) => {
    const exp = new example(data);
    return await exp.save();
}

// Alterar
exports.Alterar = async (id, data) => {
    const exp = await example
        .findByIdAndUpdate(id,
        {
            $set: {
                nome: data.nome,
                categoria: data.categoria,
                status: data.status
            }
        });
    return exp;
}

// Remover
exports.Remover = async (id) => {
    const exp = await example
        .findByIdAndRemove(id);
    return exp;
}

// Buscar por Id
exports.PegarServicoID = async (id) => {
    const exp = await example
        .findById(id);
    return exp;
}

// Buscar todos 
exports.PegarTodos = async () => {
    const exps = await example.find();
    return exps;
}