const express = require('express');
const router = express.Router();

// Importar el controlador de estudiantes
const studentController = require('../controllers/estudiantecontroller.js');

// Rutas CRUD para estudiantes

// Obtener todos los estudiantes
router.get('/', function (req, res, next) {
    let estudiantes = studentController.listar()
    if (!estudiantes || estudiantes.length < 1) return res.status(404).send('No hay estudiantes registrados');
    res.send(estudiantes);
});

// Obtener un estudiante por ID
router.get('/:id', function (req, res, next) {
    let estudiante = studentController.obtener(req.params.id);
    if (typeof estudiante != 'object') return res.status(404).send(estudiante);
    res.send(estudiante);
});

// Crear un nuevo estudiante
router.post('/', function (req, res, next) {
    let nuevo = req.body
    let resultado = studentController.agregar(nuevo)
    if (Array.isArray(resultado)) return res.status(400).send(`Errores en los datos: ${resultado.join(', ')}`);
    if (typeof resultado != 'object') return res.status(500).send(resultado);
    res.send(resultado);
    // Redirigir a la lista de estudiantes después de agregar
    //.redirect('/');
});

// Actualizar un estudiante por ID
router.put('/:id', function (req, res, next) {
    let nuevo = req.body;
    let id = req.params.id;
    let resultado = studentController.actualizar(id, nuevo);
    if (Array.isArray(resultado)) return res.status(400).send(`Errores en los datos: ${resultado.join(', ')}`);
    if (typeof resultado != 'object') return res.status(500).send(resultado);
    res.send(resultado);
});

// Eliminar un estudiante por ID
router.delete('/:id', function (req, res, next) {
    let id = req.params.id;
    let resultado = studentController.eliminar(id);
    if (typeof resultado != 'object') return res.status(400).send(resultado);
    res.send(resultado);
});

module.exports = router;