'use strict';

const repositorio = require('./example-repositorio');

exports.NewExample = async (req, res) => {
    try {
        const data = repositorio.NewExample(req.body);
        res.status(200).send({
            message: 'Example cadastrado.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar',
            data: e
        });
    }
}

exports.UpdateExample = async (req, res) => {
    try {
        const data = repositorio.UpdateExample(req.params.id, req.body);
        res.status(200).send({
            message: 'Example alterado.'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao alterar',
            data: e
        });
    }
}

exports.RemoveExample = async (req, res) => {
    try {
        const data = repositorio.RemoveExample(req.params.id);
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