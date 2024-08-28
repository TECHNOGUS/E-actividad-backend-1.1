const express = require("express");
const router = express.Router();
const ProfesorController = require("../controllers/profesorcontroller");
const {
  authenticateJWT,
  authorizeRole
} = require("../middlewares/authMiddleware");

router.get("/listar", authenticateJWT, ProfesorController.listar);
router.get(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  ProfesorController.mostrarFormularioCrear
);
router.post(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  ProfesorController.crear
);
router.get(
  "/:id/editar",
  authenticateJWT,
  authorizeRole("Admin"),
  ProfesorController.mostrarFormularioEditar
);
router.put(
  "/:id",
  authenticateJWT,
  authorizeRole("Admin"),
  ProfesorController.actualizar
);
router.delete(
  "/:id/eliminar",
  authenticateJWT,
  authorizeRole("Admin"),
  ProfesorController.eliminar
);
router.get("/ver/:id", authenticateJWT, ProfesorController.obtener);

module.exports = router;
