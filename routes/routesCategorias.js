const express = require("express");
const router = express.Router();
const controllerCategorias = require('../controllers/controllerCategorias')

router.get("/",controllerCategorias.getCategorias);
router.get("/:id",controllerCategorias.getCategoriaById);
router.post("/",controllerCategorias.createCategoria);
router.patch("/:id",controllerCategorias.editCategoria);
router.delete("/:id",controllerCategorias.deleteCategoria);

module.exports = router;

