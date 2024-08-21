const express = require('express');
const router = express.Router();
const studentController = require('../controllers/estudiantecontroller'); 

// Rutas CRUD para estudiantes

// Obtener todos los estudiantes
router.get('/', studentController.listar);

// Obtener un estudiante por ID
router.get('/:id', studentController.obtener);

// Crear un nuevo estudiante
router.post('/', studentController.agregar);

// Actualizar un estudiante por ID
router.put('/:id', studentController.actualizar);

// Eliminar un estudiante por ID
router.delete('/:id', studentController.eliminar);

module.exports = router;
