const Profesor = require("../models/profesor");

class ProfesorController {
  static async listar(req, res, next) {
    try {
      const profesores = await Profesor.findAll();
      res.render("profesores/listar", { profesores });
    } catch (error) {
      next(error);
    }
  }

  static mostrarFormularioCrear(req, res) {
    res.render("profesores/agregar");
  }

  static async crear(req, res, next) {
    try {
      const { nombre } = req.body;
      await Profesor.create({ nombre });
      res.redirect("/profesores/listar");
    } catch (error) {
      next(error);
    }
  }

  static async mostrarFormularioEditar(req, res, next) {
    try {
      const { id } = req.params;
      const profesor = await Profesor.findByPk(id);
      if (!profesor) return res.status(404).send("Profesor no encontrado");
      res.render("profesores/editar", { profesor });
    } catch (error) {
      next(error);
    }
  }

  static async actualizar(req, res, next) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const profesor = await Profesor.findByPk(id);
      if (!profesor) return res.status(404).send("Profesor no encontrado");
      await profesor.update({ nombre });
      res.redirect("/profesores/listar");
    } catch (error) {
      next(error);
    }
  }

  static async eliminar(req, res, next) {
    try {
      const { id } = req.params;
      const profesor = await Profesor.findByPk(id);
      if (!profesor) return res.status(404).send("Profesor no encontrado");
      await profesor.destroy();
      res.redirect("/profesores/listar");
    } catch (error) {
      next(error);
    }
  }

  static async obtener(req, res, next) {
    try {
      const { id } = req.params;
      const profesor = await Profesor.findByPk(id);
      if (!profesor) return res.status(404).send("Profesor no encontrado");
      res.render("profesores/detalle", { profesor });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProfesorController;
