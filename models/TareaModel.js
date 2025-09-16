const fs = require('fs').promises;
const path = require('path');
const Tarea = require('./Tarea');

class TareaModel {
  constructor() {
    this.rutaJSON = path.join(__dirname, '../data/tareas.json');
    this.rutaEmpleados = path.join(__dirname, '../data/empleados.json');
    this.rutaPacientes = path.join(__dirname, '../data/pacientes.json');
    this.rutaAreas = path.join(__dirname, '../data/areas.json');
  }
}

module.exports = new TareaModel();