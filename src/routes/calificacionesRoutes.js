const express = require("express");
const router = express.Router();
const CalificacionController = require("../controllers/calificacioncontroller");
const {
  authenticateJWT,
  authorizeRole
} = require("../middlewares/authMiddleware");

router.get("/listar", authenticateJWT, CalificacionController.listar);
router.get(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  CalificacionController.mostrarFormularioCrear
);
router.post(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  CalificacionController.crear
);
router.get(
  "/:id/editar",
  authenticateJWT,
  authorizeRole("Admin"),
  CalificacionController.mostrarFormularioEditar
);
router.put(
  "/:id",
  authenticateJWT,
  authorizeRole("Admin"),
  CalificacionController.actualizar
);
router.delete(
  "/:id/eliminar",
  authenticateJWT,
  authorizeRole("Admin"),
  CalificacionController.eliminar
);
router.get("/ver/:id", authenticateJWT, CalificacionController.obtener);

module.exports = router;
