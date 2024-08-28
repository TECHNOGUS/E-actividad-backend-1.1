const Calificacion = require("../models/calificacion");
const Estudiante = require("../models/estudiante");
const Curso = require("../models/curso");

class CalificacionController {
  static async listar(req, res, next) {
    try {
      const calificaciones = await Calificacion.findAll({
        include: [
          { model: Estudiante, as: "estudiante" },
          { model: Curso, as: "curso" }
        ]
      });
      res.render("calificaciones/listar", { calificaciones });
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioCrear(req, res, next) {
    try {
      const estudiantes = await Estudiante.findAll();
      const cursos = await Curso.findAll();
      res.render("calificaciones/agregar", { estudiantes, cursos });
    } catch (error) {
      next(error);
    }
  }

  static async crear(req, res, next) {
    try {
      const { estudianteId, cursoId, calificacion } = req.body;
      await Calificacion.create({ estudianteId, cursoId, calificacion });
      res.redirect("/calificaciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioEditar(req, res, next) {
    try {
      const { id } = req.params;
      const calificacion = await Calificacion.findByPk(id, {
        include: [{ model: Curso, as: "curso" }]
      });
      const cursos = await Curso.findAll();
      if (!calificacion)
        return res.status(404).send("Calificación no encontrada");
      res.render("calificaciones/editar", {
        calificacion,
        cursos
      });
    } catch (error) {
      next(error);
    }
  }

  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const { cursoId, calificacion } = req.body;
      console.log({ cursoId });
      const calif = await Calificacion.findByPk(id);
      if (!calif) return res.status(404).send("Calificación no encontrada");
      await calif.update({ cursoId, calificacion });
      res.redirect("/calificaciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;
      const calificacion = await Calificacion.findByPk(id);
      if (!calificacion)
        return res.status(404).send("Calificación no encontrada");
      await calificacion.destroy();
      res.redirect("/calificaciones/listar");
    } catch (error) {
      next(error);
    }
  }

  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      const calificacion = await Calificacion.findByPk(id, {
        include: [
          { model: Estudiante, as: "estudiante" },
          { model: Curso, as: "curso" }
        ]
      });
      if (!calificacion)
        return res.status(404).send("Calificación no encontrada");
      res.render("calificaciones/detalle", { calificacion });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CalificacionController;
