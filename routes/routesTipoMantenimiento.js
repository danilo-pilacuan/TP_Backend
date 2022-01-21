const express = require("express");
const router = express.Router();
const controllerTipoMantenimiento = require('../controllers/controllerTipoMantenimiento')

router.get("/",controllerTipoMantenimiento.getTiposMantenimiento);
router.get("/:id",controllerTipoMantenimiento.getTipoMantenimientoById);
router.post("/",controllerTipoMantenimiento.createTipoMantenimiento);
router.patch("/:id",controllerTipoMantenimiento.editTipoMantenimiento);
router.delete("/:id",controllerTipoMantenimiento.deleteTipoMantenimiento);

module.exports = router;

