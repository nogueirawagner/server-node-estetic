'use strict';

const mongoose = require('mongoose');
const example = mongoose.model('Example');

// Criar novo 
exports.NewExample = async (data) => {
    const exp = new example(data);
    return await exp.save();
}

// Alterar
exports.UpdateExample = async (id, data) => {
    const exp = await example
        .findByIdAndUpdate(id,
        {
            $set: {
                titulo: data.titulo,
                descricao: data.descricao,
                preco: data.preco
            }
        });
    return exp;
}

// Remover
exports.RemoveExample = async (id) => {
    const exp = await example
        .findByIdAndRemove(id);
    return exp;
}

// Buscar por Id
exports.GetByIdExample = async (id) => {
    const exp = await example
        .findById(id);
    return exp;
}

// Buscar todos ativos
exports.GetExamples = async () => {
    const exps = await example.find({
        ativo: true
    });
    return exps;
}

// Buscar por codigo e ativo, retornar somente as colunas codigo, titulo e marca 
exports.GetByCode = async (code) => {
    const exp = await example.findOne({
        codigo: code,
        ativo: true
    }, 'codigo titulo marca');
    return exp;
}

// Buscar por marca e ativo, retornar somente colunas codigo e titulo
exports.GetByMark = async (mark) => {
    const exp = await example.find({
        marca: mark,
        ativo: true
    }, 'codigo titulo');
    return exp;
}