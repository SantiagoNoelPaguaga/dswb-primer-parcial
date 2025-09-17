class Tarea {
      constructor(id, titulo, area, estado, prioridad, fechaInicio, fechaFin, 
                empleadoId, pacienteId, proveedorId, observaciones) {
        this.id = id;
        this.titulo = titulo;       
        this.area = area;           
        this.estado = estado;           // pendiente, en proceso, finalizada
        this.prioridad = prioridad;     // alta, media, baja
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.empleadoId = empleadoId;
        this.pacienteId = pacienteId || null;
        this.proveedorId = proveedorId || null;
        this.observaciones = observaciones;
    }
}
module.exports = Tarea;