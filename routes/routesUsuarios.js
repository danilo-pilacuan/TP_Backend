const express = require("express");
const router = express.Router();
const controllerUsuarios = require('../controllers/controllerUsuarios')

router.get("/",controllerUsuarios.getUsuarios);
router.get("/:id",controllerUsuarios.getUsuarioById);
router.post("/",controllerUsuarios.createUsuario);
router.patch("/:id",controllerUsuarios.editUsuario);
router.delete("/:id",controllerUsuarios.deleteUsuario);

module.exports = router;

