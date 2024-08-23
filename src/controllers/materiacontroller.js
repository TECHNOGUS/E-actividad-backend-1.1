const Materia = require('../models/materia');

class MateriaController {
    static async listar(req, res, next) {
        try {
            const materias = await Materia.findAll();
            res.render('materias/listar', { materias });
        } catch (error) {
            next(error);
        }
    }

    static mostrarFormularioCrear(req, res) {
        res.render('materias/agregar');
    }

    static async crear(req, res, next) {
        try {
            const { nombre } = req.body;
            await Materia.create({ nombre });
            res.redirect('/materias/listar');
        } catch (error) {
            next(error);
        }
    }

    static async mostrarFormularioEditar(req, res, next) {
        try {
            const { id } = req.params;
            const materia = await Materia.findByPk(id);
            if (!materia) return res.status(404).send('Materia no encontrada');
            res.render('materias/editar', { materia });
        } catch (error) {
            next(error);
        }
    }

    static async actualizar(req, res, next) {
        try {
            const { id } = req.params;
            const { nombre } = req.body;
            const materia = await Materia.findByPk(id);
            if (!materia) return res.status(404).send('Materia no encontrada');
            await materia.update({ nombre });
            res.redirect('/materias/listar');
        } catch (error) {
            next(error);
        }
    }

    static async eliminar(req, res, next) {
        try {
            const { id } = req.params;
            const materia = await Materia.findByPk(id);
            if (!materia) return res.status(404).send('Materia no encontrada');
            await materia.destroy();
            res.redirect('/materias/listar');
        } catch (error) {
            next(error);
        }
    }

    static async obtener(req, res, next) {
        try {
            const { id } = req.params;
            const materia = await Materia.findByPk(id);
            if (!materia) return res.status(404).send('Materia no encontrada');
            res.render('materias/detalle', { materia });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = MateriaController;
