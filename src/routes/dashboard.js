const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');

router.get('/dashboard', authenticateJWT, (req, res) => {
    const userRole = req.user.role; // Extrae el rol del usuario desde el token JWT
    res.render('dashboard', { role: userRole }); // Pasa el rol a la vista
});

module.exports = router;
