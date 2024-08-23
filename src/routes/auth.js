// routes/auth.js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const AuthController = require('../controllers/authController');

// Mostrar formulario de login
router.get('/login', (req, res) => {
  res.render('login');  // Asegúrate de tener la vista `login.ejs`
});

// Mostrar formulario de registro
router.get('/register', (req, res) => {
  res.render('register');  // Asegúrate de tener la vista `register.ejs`
});

// Registro de usuario
router.post('/register', [
  check('username').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  check('role').isIn(['Admin', 'Editor']).withMessage('El rol debe ser Admin o Editor')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, AuthController.register);

// Inicio de sesión
router.post('/login', [
  check('username').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  check('password').notEmpty().withMessage('La contraseña es obligatoria')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, AuthController.login);

// Cerrar sesión
router.post('/logout', AuthController.logout);

module.exports = router;
