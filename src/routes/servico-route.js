'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/servico-controller');

router.get('/', controller.PegarTodos);
router.get('/ById', controller.PegarServicoID);
router.post('/', controller.Inserir);
router.post('/', controller.Alterar);
router.delete('/', controller.Remover);


module.exports = router;