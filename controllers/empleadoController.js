const empleadoModel = require('../models/EmpleadoModel');

class EmpleadoController {
  constructor() {
    this.empleadoModel = empleadoModel;
  }
}

module.exports = EmpleadoController;