const express = require("express");
const router = express.Router();
const InscripcionController = require("../controllers/inscripcioncontroller");
const {
  authenticateJWT,
  authorizeRole
} = require("../middlewares/authMiddleware");

router.get("/listar", authenticateJWT, InscripcionController.listar);
router.get(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  InscripcionController.mostrarFormularioCrear
);
router.post(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  InscripcionController.crear
);
router.get(
  "/:id/editar",
  authenticateJWT,
  authorizeRole("Admin"),
  InscripcionController.mostrarFormularioEditar
);
router.put(
  "/:id",
  authenticateJWT,
  authorizeRole("Admin"),
  InscripcionController.actualizar
);
router.delete(
  "/:id/eliminar",
  authenticateJWT,
  authorizeRole("Admin"),
  InscripcionController.eliminar
);
router.get("/ver/:id", authenticateJWT, InscripcionController.obtener);

module.exports = router;
