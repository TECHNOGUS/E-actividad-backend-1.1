const Inscripcion = require("../models/inscripcion");
const Estudiante = require("../models/estudiante");
const Curso = require("../models/curso");

class InscripcionController {
  static async listar(req, res, next) {
    try {
      const inscripciones = await Inscripcion.findAll({
        include: [
          { model: Estudiante, as: "estudiante" },
          { model: Curso, as: "curso" }
        ]
      });
      res.render("inscripciones/listar", { inscripciones });
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioCrear(req, res, next) {
    try {
      const estudiantes = await Estudiante.findAll();
      const cursos = await Curso.findAll();
      res.render("inscripciones/agregar", { estudiantes, cursos });
    } catch (error) {
      next(error);
    }
  }

  static async crear(req, res, next) {
    try {
      const { estudianteId, cursoId } = req.body;
      await Inscripcion.create({ estudianteId, cursoId });
      res.redirect("/inscripciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioEditar(req, res, next) {
    try {
      const { id } = req.params;
      const inscripcion = await Inscripcion.findByPk(id, {
        include: [
          { model: Estudiante, as: "estudiante" },
          { model: Curso, as: "curso" }
        ]
      });
      const cursos = await Curso.findAll();
      if (!inscripcion)
        return res.status(404).send("Inscripción no encontrada");
      res.render("inscripciones/editar", { inscripcion, cursos });
    } catch (error) {
      next(error);
    }
  }

  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const { estudianteId, cursoId } = req.body;
      const inscripcion = await Inscripcion.findByPk(id);
      if (!inscripcion)
        return res.status(404).send("Inscripción no encontrada");
      await inscripcion.update({ estudianteId, cursoId });
      res.redirect("/inscripciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;
      const inscripcion = await Inscripcion.findByPk(id);
      if (!inscripcion)
        return res.status(404).send("Inscripción no encontrada");
      await inscripcion.destroy();
      res.redirect("/inscripciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      const inscripcion = await Inscripcion.findByPk(id, {
        include: [
          { model: Estudiante, as: "estudiante" },
          { model: Curso, as: "curso" }
        ]
      });
      if (!inscripcion)
        return res.status(404).send("Inscripción no encontrada");
      res.render("inscripciones/detalle", { inscripcion });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InscripcionController;
