const express = require("express");
const router = express.Router();
const controllerTalleres = require('../controllers/controllerTalleres')

router.get("/",controllerTalleres.getTalleres);
router.get("/:id",controllerTalleres.getTallerById);
router.post("/",controllerTalleres.createTaller);
router.patch("/:id",controllerTalleres.editTaller);
router.delete("/:id",controllerTalleres.deleteTaller);

module.exports = router;

