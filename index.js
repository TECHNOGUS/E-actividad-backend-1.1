// index.js
const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const { authenticateJWT } = require('./src/middlewares/authMiddleware');


require('./src/config/db_config.js');

const authRoutes = require('./src/routes/auth'); // Rutas de autenticación
const studentRoutes = require('./src/routes/estudiantesroutes'); // Rutas de estudiantes
const dashboardRoutes = require('./src/routes/dashboard');
const materiasRoutes = require('./src/routes/materiasRoutes');




const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Rutas
app.use('/', authRoutes); // la ruta raíz


app.use('/dashboard', authenticateJWT, dashboardRoutes);


// Redirigir la raíz al formulario de login si no está autenticado
app.get('/', (req, res) => {
  res.redirect('/login'); // Redirige a la página de login
});

// Rutas de estudiantes, protegidas por autenticación
app.use('/estudiantes', studentRoutes);

app.use('/', dashboardRoutes);  // Agregar la ruta para el dashboard
app.use('/materias', materiasRoutes);  // Integrar las rutas de materias



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
