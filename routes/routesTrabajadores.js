const express = require("express");
const router = express.Router();
const controllerTrabajadores = require('../controllers/controllerTrabajadores')

router.get("/",controllerTrabajadores.getTrabajadores);
router.get("/:id",controllerTrabajadores.getTrabajadorById);
router.post("/",controllerTrabajadores.createTrabajador);
router.patch("/:id",controllerTrabajadores.editTrabajador);
router.delete("/:id",controllerTrabajadores.deleteTrabajador);

module.exports = router;

