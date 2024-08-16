const express = require('express');
const router = express.Router();

// Importar el controlador de estudiantes
const studentController = require('../controllers/estudiantecontroller.js');

//Rutas para las vistas

// Mostrar todos los estudiantes
router.get('/listar', function (req, res, next) {
    let estudiantes = studentController.listar()
    res.render('listar', { estudiantes: estudiantes });
});

// Mostrar datos para un estudiante por ID
router.get('/ver/:id', function (req, res, next) {
    let datos = studentController.obtener(req.params.id)
    res.render('detalle', { estudiante: datos });
});

// Crear un nuevo estudiante
router.get('/nuevo', function (req, res, next) {
    res.render('agregar');
});

// Actualizar un estudiante por ID
router.get('/:id/editar', function (req, res, next) {
    let datos = studentController.obtener(req.params.id)
    res.render('editar', { estudiante: datos });
});

// Eliminar un estudiante por ID
router.delete('/:id/eliminar', function (req, res, next) {
    let id = req.params.id;
    let resultado = studentController.eliminar(id);
    // Redirigir a la lista de estudiantes después de agregar
    res.redirect('/');
});


module.exports = router;