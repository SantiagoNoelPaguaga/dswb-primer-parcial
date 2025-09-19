const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleadoController');
const controller = new EmpleadoController();

router.post('/', (req, res) => controller.crear(req, res));

module.exports = router;