const express = require("express");
const router = express.Router();
const controllerMateriales = require('../controllers/controllerMateriales')

router.get("/",controllerMateriales.getMateriales);
router.get("/:id",controllerMateriales.getMaterialById);
router.get("/ordenTrabajo/:id",controllerMateriales.getMaterialByOrdenTrabajoId);
router.post("/",controllerMateriales.createMaterial);
router.patch("/:id",controllerMateriales.editMaterial);
router.delete("/:id",controllerMateriales.editMaterial);

module.exports = router;

