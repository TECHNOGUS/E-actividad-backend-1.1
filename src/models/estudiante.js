const { v4: uuidv4 } = require('uuid');
const estudiantes = [
  {
    id: uuidv4(),
    nombre: 'marcos',
    edad: 18,
    carrera: 'Ing en Computación',
  }
]
const carreras = [
  "Ing en Computación",
  "Ing Industrial",
  "Contaduría Pública",
  "Administración De Empresas",
  "Derecho"
]

class Estudiante {
  constructor(nombre, edad, carrera, id) {
    this.id = (!id) ? uuidv4() : id;
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
  }
}

class StudentModels {
  // Método para mostrar los datos del estudiante
  static listar() {
    return estudiantes;
  }

  // Método para agregar estudiante
  static agregar(estudiante) {
    let add = new Estudiante(estudiante.nombre, estudiante.edad, estudiante.carrera);
    estudiantes.push(add);
    return estudiantes[estudiantes.length - 1];
  }

  // Método para actualizar los datos del estudiante
  static actualizar(index, id, estudiante) {
    if(!index && index !== 0) return 'Error: sin índice';
    let up = new Estudiante(estudiante.nombre, estudiante.edad, estudiante.carrera, id);
    estudiantes[index] = up;
    return estudiantes[index];
  }

  // Método para borrar estudiante
  static eliminar(index) {
    if(!index && index !== 0) return 'Error: sin índice';
    return estudiantes.splice(index, 1);
  }

  // Método para buscar estudiante
  static buscar(valor, parametro = 'id') {
    if (!valor) return 'Error: sin ID';
    let index = estudiantes.findIndex(estudiante => estudiante[parametro] == valor);
    if (index === -1) return `No existe el estudiante con: ${parametro} = '${valor}'`;
    return index;
  }

  // Método para mostrar carreras válidas
  static carrerasValidas(carrera) {
    if(!carrera || typeof carrera != 'string') return false;
    return carreras.includes(carrera);
  }
}


module.exports = StudentModels;