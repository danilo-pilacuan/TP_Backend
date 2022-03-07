const express = require("express");
const router = express.Router();
const controllerOrdenMaterial = require('../controllers/controllerOrdenMaterial')

router.get("/",controllerOrdenMaterial.getOrdenMateriales);
router.get("/:id",controllerOrdenMaterial.getOrdenMaterialesById);
router.post("/",controllerOrdenMaterial.createOrdenMaterial);
router.patch("/:id",controllerOrdenMaterial.editOrdenMaterial);
router.delete("/byom",controllerOrdenMaterial.deleteOrdenMaterialByMaterialIdOrdenId);
router.delete("/:id",controllerOrdenMaterial.deleteOrdenMaterial);

module.exports = router;

