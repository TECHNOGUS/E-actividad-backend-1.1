const express = require('express');
require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const studentRoutes = require('./src/routes/estudiantesroutes.js');
const studentViews = require('./src/routes/index.js');

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Configuración del motor de plantillas
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Middleware para procesar datos en formato JSON y URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas principales
app.use('/', studentViews);
app.use('/estudiantes', studentRoutes);

// Redirigir la raíz al listado de estudiantes
app.get('/', (req, res) => {
  res.redirect('/listar');
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
