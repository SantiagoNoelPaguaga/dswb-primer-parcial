const tareaModel = require('../models/TareaModel');

class TareaController {
  constructor() {
    this.tareaModel = tareaModel;
  }
}

module.exports = TareaController;