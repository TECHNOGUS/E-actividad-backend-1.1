const express = require("express");
const router = express.Router();
const SemestreController = require("../controllers/semestrecontroller");
const {
  authenticateJWT,
  authorizeRole
} = require("../middlewares/authMiddleware");

router.get("/listar", authenticateJWT, SemestreController.listar);
router.get(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  SemestreController.mostrarFormularioCrear
);
router.post(
  "/nuevo",
  authenticateJWT,
  authorizeRole("Admin"),
  SemestreController.crear
);
router.get(
  "/:id/editar",
  authenticateJWT,
  authorizeRole("Admin"),
  SemestreController.mostrarFormularioEditar
);
router.put(
  "/:id",
  authenticateJWT,
  authorizeRole("Admin"),
  SemestreController.actualizar
);
router.delete(
  "/:id/eliminar",
  authenticateJWT,
  authorizeRole("Admin"),
  SemestreController.eliminar
);
router.get("/ver/:id", authenticateJWT, SemestreController.obtener);

module.exports = router;
