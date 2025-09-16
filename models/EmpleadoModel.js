const fs = require('fs').promises;
const path = require('path');
const Empleado = require('./Empleado');

class EmpleadoModel {
  constructor() {
    this.rutaJSON = path.join(__dirname, '../data/empleados.json');
  }
}

module.exports = new EmpleadoModel();