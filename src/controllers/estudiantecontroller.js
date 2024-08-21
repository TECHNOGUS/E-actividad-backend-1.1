const Estudiante = require('../models/estudiante');
const Materia = require('../models/materia')

class StudentController {
  // Método para listar todos los estudiantes
  static async listar(req, res, next) {
    try {
      const estudiantes = await Estudiante.findAll({ include: { model: Materia, as: 'carrera' } });
    
      res.render('listar', { estudiantes: estudiantes });
    } catch (error) {
      next(error); // Manejo de errores
    }
  }

  // Método para obtener un estudiante por ID
  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send('Debe ingresar ID');

      const estudiante = await Estudiante.findByPk(id, { include: { model: Materia, as: 'carrera' } });

      if (!estudiante) return res.status(404).send('Estudiante no encontrado');
      res.render('detalle', { estudiante: estudiante });
    } catch (error) {
      next(error); // Manejo de errores
    }
  }

  // Método para agregar un nuevo estudiante
  static async agregar(req, res, next) {
    try {
      const datos = req.body;
      if (datos.edad) datos.edad = parseInt(datos.edad);

      // Buscar la carrera en la base de datos
      const materia = await Materia.findOne({ where: { nombre: datos.carrera } });

      if (!materia) return res.status(400).send('Carrera no encontrada');

      // Crear el nuevo estudiante
      const nuevoEstudiante = await Estudiante.create({
        nombre: datos.nombre,
        edad: datos.edad,
        carreraId: materia.id,
      });

      res.redirect('/listar');
    } catch (error) {
      next(error); // Manejo de errores
    }
  }

  // Método para actualizar un estudiante por ID
  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const datos = req.body;

      if (datos.edad) datos.edad = parseInt(datos.edad);

      if (!id) return res.status(400).send('Debe ingresar ID');

      const estudiante = await Estudiante.findByPk(id);

      if (!estudiante) return res.status(404).send('Estudiante no encontrado');

      // Si la carrera cambia, buscamos la nueva carrera
      if (datos.carrera) {
        const materia = await Materia.findOne({ where: { nombre: datos.carrera } });
        if (!materia) return res.status(400).send('Carrera no encontrada');
        datos.carreraId = materia.id;
      }

      // Actualizamos el estudiante
      await estudiante.update(datos);
      res.redirect('/listar');
    } catch (error) {
      next(error); // Manejo de errores
    }
  }

  // Método para eliminar un estudiante por ID
  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).send('Debe ingresar ID');

      const estudiante = await Estudiante.findByPk(id);

      if (!estudiante) return res.status(404).send('Estudiante no encontrado');

      await estudiante.destroy();
      res.redirect('/listar');
    } catch (error) {
      next(error); // Manejo de errores
    }
  }  
}

module.exports = StudentController;
