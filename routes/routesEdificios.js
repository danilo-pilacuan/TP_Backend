const express = require("express");
const router = express.Router();
const controllerEdificios = require('../controllers/controllerEdificios')

router.get("/",controllerEdificios.getEdificios);
router.get("/:id",controllerEdificios.getEdificioById);
router.post("/",controllerEdificios.createEdificio);
router.patch("/:id",controllerEdificios.editEdificio);
router.delete("/:id",controllerEdificios.deleteEdificio);

module.exports = router;

