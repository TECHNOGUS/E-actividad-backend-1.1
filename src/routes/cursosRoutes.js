const express = require("express");
const router = express.Router();
const CursoController = require("../controllers/cursocontroller");
const {
  authenticateJWT,
  authorizeRole
} = require("../middlewares/authMiddleware");

router.get("/listar", authenticateJWT, CursoController.listar);
router.get(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  CursoController.mostrarFormularioCrear
);
router.post(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  CursoController.crear
);
router.get(
  "/:id/editar",
  authenticateJWT,
  authorizeRole("Admin"),
  CursoController.mostrarFormularioEditar
);
router.put(
  "/:id",
  authenticateJWT,
  authorizeRole("Admin"),
  CursoController.actualizar
);
router.delete(
  "/:id/eliminar",
  authenticateJWT,
  authorizeRole("Admin"),
  CursoController.eliminar
);
router.get("/ver/:id", authenticateJWT, CursoController.obtener);

module.exports = router;
