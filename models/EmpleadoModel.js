const fs = require('fs').promises;
const path = require('path');
const Empleado = require('./Empleado');

class EmpleadoModel {
  constructor() {
    this.rutaJSON = path.join(__dirname, '../data/empleados.json');
  }

  async listar() {
    const data = await fs.readFile(this.rutaJSON, 'utf-8');
    return JSON.parse(data);
  }

  async crear(datos) {
    const empleados = await this.listar();
    const nuevoEmpleado = new Empleado({
      id: empleados.length + 1,
      ...datos
    });
    empleados.push(nuevoEmpleado);
    await fs.writeFile(this.rutaJSON, JSON.stringify(empleados, null, 2));
    return nuevoEmpleado;
  }

}

module.exports = new EmpleadoModel();