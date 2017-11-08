'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria-controller');

router.post('/', controller.Inserir);
router.post('/', controller.Alterar);
router.delete('/', controller.Remover);
router.get('/', controller.PegarTodos);
router.get('/ById', controller.PegarCategoriaID);

module.exports = router;