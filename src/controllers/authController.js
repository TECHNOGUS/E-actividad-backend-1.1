const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Credenciales incorrectas');
      }
  
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Rol en el token:', user.role);  // rol se está incluyendo correctamente
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/dashboard');
    } catch (error) {
      next(error);
    }
  }
  

  static logout(req, res) {
    res.clearCookie('token');
    res.redirect('/login');
  }

  static async register(req, res, next) {
    try {
      const { username, password, role } = req.body;
  
      // Verifica que el nombre de usuario no esté ya registrado
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).send('El nombre de usuario ya está en uso');
      }
  
      // Crea el usuario
      const user = await User.create({ username, password, role });
      res.status(201).redirect('/login');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
