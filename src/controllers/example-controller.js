'use strict';

const repositorio = require('../repositories/example-repositorio');

exports.NewExample = async (req, res) => {
    try {
        console.log("chegou aqui");
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
        const data = repositorio.UpdateExample(req.body.id, req.body);
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
        const data = repositorio.RemoveExample(req.body.id);
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

exports.GetByIdExample = async (req, res) => {
    try {
        const data = await repositorio.GetByIdExample(req.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objeto',
            data: e
        });
    }
}

exports.GetExamples = async (req, res) => {
    try {
        const data = await repositorio.GetExamples();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objetos',
            data: e
        });
    }
}

exports.GetByCode = async (req, res) => {
    try {
        const data = await repositorio.GetByCode(red.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objeto',
            data: e
        });
    }
}

exports.GetByMark = async (req, res) => {
    try {
        const data = await repositorio.GetByMark(req.body.marca);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar objetos',
            data: e
        });
    }
}