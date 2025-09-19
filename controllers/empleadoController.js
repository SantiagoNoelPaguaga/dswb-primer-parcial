const empleadoModel = require('../models/EmpleadoModel');

class EmpleadoController {
  constructor() {
    this.empleadoModel = empleadoModel;
  }

  async crear(req, res) {
    try {
      const nuevoEmpleado = await this.empleadoModel.crear(req.body);
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}

module.exports = EmpleadoController;