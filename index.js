const express = require('express');
require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express(); // Crear una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Configurar el puerto del servidor

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
