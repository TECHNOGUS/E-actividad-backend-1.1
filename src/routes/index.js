const express = require('express');
const router = express.Router();
const Estudiante = require('../models/estudiante');
const Materia = require('../models/materia')
const studentController = require('../controllers/estudiantecontroller'); 

// Rutas para las vistas

// Mostrar todos los estudiantes
router.get('/listar', studentController.listar);

// Mostrar datos para un estudiante por ID
router.get('/ver/:id', async(req, res, next) => {
    const { id } = req.params;
    const estudiante = await Estudiante.findByPk(id, { include: { model: Materia, as: 'carrera' } });
    res.render('detalle', { estudiante: estudiante });
});

// Mostrar formulario para crear un nuevo estudiante
router.get('/nuevo', (req, res, next) => {
    res.render('agregar');
});

// Mostrar formulario para editar un estudiante por ID
router.get('/:id/editar', async (req, res, next) => {
    const { id } = req.params;
    const estudiante = await Estudiante.findByPk(id, { include: { model: Materia, as: 'carrera' } });
    res.render('editar', { estudiante: estudiante });
});

// Eliminar un estudiante por ID
router.delete('/:id/eliminar', studentController.eliminar);

module.exports = router;
