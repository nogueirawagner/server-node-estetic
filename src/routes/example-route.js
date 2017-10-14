'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/example-controller');

router.post('/', controller.NewExample);
router.post('/', controller.UpdateExample);
router.delete('/', controller.RemoveExample);
router.get('/', controller.GetExamples);
router.get('/ById', controller.GetByIdExample);
router.get('/ByCode', controller.GetByCode);
router.get('/ByMark', controller.GetByMark);

module.exports = router;