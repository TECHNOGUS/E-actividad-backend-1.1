const Curso = require("../models/curso");
const Materia = require("../models/materia");

class CursoController {
  static async listar(req, res, next) {
    try {
      const cursos = await Curso.findAll({
        include: [{ model: Materia, as: "materia" }]
      });
      res.render("cursos/listar", { cursos });
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioCrear(req, res, next) {
    try {
      const materias = await Materia.findAll();
      res.render("cursos/agregar", { materias });
    } catch (error) {
      next(error);
    }
  }

  static async crear(req, res, next) {
    try {
      const { nombre, materiaId } = req.body;
      await Curso.create({ nombre, materiaId });
      res.redirect("/cursos/listar");
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioEditar(req, res, next) {
    try {
      const { id } = req.params;
      const curso = await Curso.findByPk(id, {
        include: [{ model: Materia, as: "materia" }]
      });
      const materias = await Materia.findAll();
      if (!curso) return res.status(404).send("Curso no encontrado");
      res.render("cursos/editar", { curso, materias });
    } catch (error) {
      next(error);
    }
  }

  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const { nombre, materiaId } = req.body;
      const curso = await Curso.findByPk(id);
      if (!curso) return res.status(404).send("Curso no encontrado");
      await curso.update({ nombre, materiaId });
      res.redirect("/cursos/listar");
    } catch (error) {
      next(error);
    }
  }

  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;
      const curso = await Curso.findByPk(id);
      if (!curso) return res.status(404).send("Curso no encontrado");
      await curso.destroy();
      res.redirect("/cursos/listar");
    } catch (error) {
      next(error);
    }
  }

  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      const curso = await Curso.findByPk(id, {
        include: [{ model: Materia, as: "materia" }]
      });
      if (!curso) return res.status(404).send("Curso no encontrado");
      res.render("cursos/detalle", { curso });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CursoController;
