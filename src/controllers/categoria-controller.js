'use strict';

const repositorio = require('../repositories/categoria-repositorio');

exports.Inserir = async (req, res) => {
    try {
        console.log("chegou aqui");
        const data = repositorio.Inserir(req.body);
        res.status(200).send({
            message: 'Categoria cadastrada.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar',
            data: e
        });
    }
}

exports.Alterar = async (req, res) => {
    try {
        const data = repositorio.Alterar(req.body.id, req.body);
        res.status(200).send({
            message: 'Categoria alterada.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao alterar',
            data: e
        });
    }
}

exports.Remover = async (req, res) => {
    try {
        const data = repositorio.Remover(req.body.id);
        res.status(200).send({
            message: 'Example removido'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao remover',
            data: e
        });
    }
}

exports.PegarCategoriaID = async (req, res) => {
    try {
        const data = await repositorio.PegarCategoriaID(req.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objeto',
            data: e
        });
    }
}

exports.PegarTodos = async (req, res) => {
    try {
        const data = await repositorio.PegarTodos();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objetos',
            data: e
        });
    }
}
