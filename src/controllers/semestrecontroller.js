const Semestre = require("../models/semestre");

class SemestreController {
  static async listar(req, res, next) {
    try {
      const semestres = await Semestre.findAll();
      res.render("semestres/listar", { semestres });
    } catch (error) {
      next(error);
    }
  }

  static mostrarFormularioCrear(req, res) {
    res.render("semestres/agregar");
  }

  static async crear(req, res, next) {
    try {
      const { descripcion, fecha_inicio, fecha_fin } = req.body;
      await Semestre.create({ descripcion, fecha_inicio, fecha_fin });
      res.redirect("/semestres/listar");
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioEditar(req, res, next) {
    try {
      const { id } = req.params;
      const semestre = await Semestre.findByPk(id);
      if (!semestre) return res.status(404).send("Semestre no encontrado");
      res.render("semestres/editar", { semestre });
    } catch (error) {
      next(error);
    }
  }

  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const { descripcion, fecha_inicio, fecha_fin } = req.body;
      const semestre = await Semestre.findByPk(id);
      if (!semestre) return res.status(404).send("Semestre no encontrado");
      await semestre.update({ descripcion, fecha_inicio, fecha_fin });
      res.redirect("/semestres/listar");
    } catch (error) {
      next(error);
    }
  }

  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;
      const semestre = await Semestre.findByPk(id);
      if (!semestre) return res.status(404).send("Semestre no encontrado");
      await semestre.destroy();
      res.redirect("/semestres/listar");
    } catch (error) {
      next(error);
    }
  }

  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      const semestre = await Semestre.findByPk(id);
      if (!semestre) return res.status(404).send("Semestre no encontrado");
      res.render("semestres/detalle", { semestre });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SemestreController;
