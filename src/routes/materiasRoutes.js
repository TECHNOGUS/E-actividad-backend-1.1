const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/materiacontroller');
const { authenticateJWT, authorizeRole } = require('../middlewares/authMiddleware');

// Definir las rutas para materias
router.get('/listar', authenticateJWT, MateriaController.listar); // Todos los usuarios autenticados pueden listar materias
router.get('/nuevo', authenticateJWT, authorizeRole('Admin'), MateriaController.mostrarFormularioCrear); // Solo Admin puede crear
router.post('/nuevo', authenticateJWT, authorizeRole('Admin'), MateriaController.crear); // Solo Admin puede crear
router.get('/:id/editar', authenticateJWT, authorizeRole('Admin'), MateriaController.mostrarFormularioEditar); // Solo Admin puede editar
router.put('/:id', authenticateJWT, authorizeRole('Admin'), MateriaController.actualizar); // Solo Admin puede actualizar
router.delete('/:id/eliminar', authenticateJWT, authorizeRole('Admin'), MateriaController.eliminar); // Solo Admin puede eliminar
router.get('/ver/:id', authenticateJWT, MateriaController.obtener); // Todos los usuarios autenticados pueden ver materias

module.exports = router;
