const express = require("express");
const router = express.Router();
const controllerActivos = require('../controllers/controllerActivos')

router.get("/",controllerActivos.getActivos);
router.get("/:id",controllerActivos.getActivoById);
router.post("/",controllerActivos.createActivo);
router.patch("/:id",controllerActivos.editActivo);
router.delete("/:id",controllerActivos.deleteActivo);

module.exports = router;

