const express = require("express");
const router = express.Router();
const controllerEstadoMantenimiento = require('../controllers/controllerEstadoMantenimiento')

router.get("/",controllerEstadoMantenimiento.getEstadosMantenimiento);
router.get("/:id",controllerEstadoMantenimiento.getEstadoMantenimientoById);
router.post("/",controllerEstadoMantenimiento.createEstadoMantenimiento);
router.patch("/:id",controllerEstadoMantenimiento.editEstadoMantenimiento);
router.delete("/:id",controllerEstadoMantenimiento.deleteEstadoMantenimiento);

module.exports = router;

