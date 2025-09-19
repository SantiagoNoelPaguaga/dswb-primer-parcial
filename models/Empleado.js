class Empleado {
  constructor({id, nombre, rol, area}) {
    this.id = id;          
    this.nombre = nombre;  
    this.rol = rol;        
    this.area = area;      
  }
}

module.exports = Empleado;