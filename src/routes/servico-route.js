'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/servico-controller');

router.post('/', controller.Inserir);
router.post('/', controller.Alterar);
router.delete('/', controller.Remover);
router.get('/', controller.PegarTodos);
router.get('/ById', controller.PegarServicoID);

module.exports = router;