const express = require("express");
const router = express.Router();
const controllerOrdenTareas = require('../controllers/controllerOrdenTareas')

router.get("/",controllerOrdenTareas.getOrdenTareas);
router.get("/:id",controllerOrdenTareas.getOrdenTareasById);
router.get("/orden/:id",controllerOrdenTareas.findTareasByOrdenId);
router.post("/",controllerOrdenTareas.createOrdenTarea);
router.patch("/:id",controllerOrdenTareas.editOrdenTarea);
router.delete("/byot",controllerOrdenTareas.deleteOrdenTareaByTareaIdOrdenId);
router.delete("/:id",controllerOrdenTareas.deleteOrdenTarea);

module.exports = router;

