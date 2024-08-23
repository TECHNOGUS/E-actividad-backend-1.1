const express = require('express');
const router = express.Router();
const studentController = require('../controllers/estudiantecontroller');
const Estudiante = require('../models/estudiante'); // Importar el modelo Estudiante
const Materia = require('../models/materia'); // Importar el modelo Materia
const { authenticateJWT, authorizeRole } = require('../middlewares/authMiddleware');

// Mostrar todos los estudiantes
router.get('/listar', authenticateJWT, studentController.listar);

// Mostrar datos para un estudiante por ID
router.get('/ver/:id', authenticateJWT, studentController.obtener);

// Mostrar formulario para crear un nuevo estudiante (solo para Admin)
router.get('/nuevo', authenticateJWT, authorizeRole('Admin'), async(req, res) => {
    const materias = await Materia.findAll();
    res.render('agregar', { materias });
});

// Mostrar formulario para editar un estudiante por ID (solo para Admin)
router.get('/:id/editar', authenticateJWT, authorizeRole('Admin'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findByPk(id, { include: { model: Materia, as: 'carrera' } });
        const materias = await Materia.findAll();
        if (!estudiante) {
            return res.status(404).send('Estudiante no encontrado');
        }
        res.render('editar', { estudiante, materias });
    } catch (error) {
        next(error);
    }
});

// Procesar la creación de un nuevo estudiante (solo para Admin)
router.post('/', authenticateJWT, authorizeRole('Admin'), studentController.agregar);

// Procesar la actualización de un estudiante (solo para Admin)
router.put('/:id', authenticateJWT, authorizeRole('Admin'), studentController.actualizar);

// Eliminar un estudiante por ID (solo para Admin)
router.delete('/:id/eliminar', authenticateJWT, authorizeRole('Admin'), studentController.eliminar);

module.exports = router;
