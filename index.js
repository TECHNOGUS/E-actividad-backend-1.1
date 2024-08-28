// index.js
const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const { authenticateJWT } = require('./src/middlewares/authMiddleware');

require("./src/config/db_config.js");

const authRoutes = require("./src/routes/auth"); // Rutas de autenticación
const studentRoutes = require("./src/routes/estudiantesroutes"); // Rutas de estudiantes
const dashboardRoutes = require("./src/routes/dashboard");
const materiasRoutes = require("./src/routes/materiasRoutes");
const calificacionesRoutes = require("./src/routes/calificacionesRoutes.js");
const cursosRoutes = require("./src/routes/cursosRoutes.js");
const inscripcionesRoutes = require("./src/routes/inscripcionesRoutes.js");
const profesoresRoutes = require("./src/routes/profesoresRoutes.js");
const semestresRoutes = require("./src/routes/semestresRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Rutas
app.use("/", authRoutes); // la ruta raíz

app.use("/dashboard", authenticateJWT, dashboardRoutes);

// Redirigir la raíz al formulario de login si no está autenticado
app.get("/", (req, res) => {
  res.redirect("/login"); // Redirige a la página de login
});

// Rutas  protegidas por autenticación
app.use("/", dashboardRoutes); // Agregar la ruta para el dashboard
app.use("/estudiantes", studentRoutes);
app.use("/materias", materiasRoutes);
app.use("/calificaciones", calificacionesRoutes);
app.use("/cursos", cursosRoutes);
app.use("/inscripciones", inscripcionesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/semestres", semestresRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
