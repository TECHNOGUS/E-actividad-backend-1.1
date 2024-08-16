class StudentController {
    // Método para listar todos los estudiantes
    static listar() {
      return modelos.listar();
    }
  
    // Método para obtener un estudiante por ID
    static obtener(id) {
       //Validar id
       if (!id) return 'Debe ingresar ID';
       //Buscar indice del estudiante en el arreglo
       const index = modelos.buscar(id);
       if (typeof index != 'number') return index;
       let estudiantes = modelos.listar();
       return (Array.isArray(estudiantes)) ? estudiantes[index] : estudiantes;
    }
  
    // Método para agregar un nuevo estudiante
    static agregar(datos) {
      //Validar datos
      if (datos.edad) datos.edad = parseInt(datos.edad);
      let validar = this.validarDatos(datos);
      if (validar !== true) return validar;
      return modelos.agregar(datos);
    }
  
    // Método para actualizar un estudiante por ID
    static actualizar(id, datos) {
      //Validar datos
      if (datos.edad) datos.edad = parseInt(datos.edad);
      let validar = this.validarDatos(datos);
      if (validar !== true) return validar;
      if (!id) return 'Debe ingresar ID';
      //Buscar indice del estudiante en el arreglo
      const index = modelos.buscar(id);
      if (typeof index != 'number') return index;
      return modelos.actualizar(index, id, datos);
    }
  
    // Método para eliminar un estudiante por ID
    static eliminar(id) {
      if (!id) return 'Debe ingresar ID';
      const index = modelos.buscar(id);
      if (typeof index != 'number') return index;
      return modelos.eliminar(index);
    }
  
    //Método para validar los datos del estudiante
    static validarDatos(datos) {
      let errores = [];
  
      if (!datos.nombre || typeof datos.nombre !== 'string') {
        errores.push('Nombre es requerido y debe ser una cadena de texto.');
      }
  
      if (!Number.isInteger(datos.edad) || datos.edad <= 0) {
        errores.push('Edad debe ser un número entero positivo.');
      }
  
      if (!modelos.carrerasValidas(datos.carrera)) {
        errores.push('Carrera no válida.');
      }
  
      return (errores.length > 0) ? errores : true;
    }
  }
  
  // Exportar una instancia del controlador
  module.exports = StudentController;