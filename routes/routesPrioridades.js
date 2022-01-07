const express = require("express");
const router = express.Router();
const controllerPrioridades = require('../controllers/controllerPrioridades')

router.get("/",controllerPrioridades.getPrioridades);
router.get("/:id",controllerPrioridades.getPrioridadById);
router.post("/",controllerPrioridades.createPrioridad);
router.patch("/:id",controllerPrioridades.editPrioridad);
router.delete("/:id",controllerPrioridades.deletePrioridad);

module.exports = router;

