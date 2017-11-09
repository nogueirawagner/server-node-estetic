'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/servico-controller');

router.get('/PegarTodos', controller.PegarTodos);
router.get('/ById', controller.PegarServicoID);
router.post('/Inserir', controller.Inserir);
router.post('/Alterar', controller.Alterar);
router.delete('/', controller.Remover);


module.exports = router;