const express = require("express");
const router = express.Router();
const controllerTareas = require('../controllers/controllerTareas')

router.get("/",controllerTareas.getTareas);
router.get("/:id",controllerTareas.getTareaById);
//router.get("/orden/:id",controllerTareas.getTareaByOrdenId);
router.post("/",controllerTareas.createTarea);
router.patch("/:id",controllerTareas.editTarea);
router.delete("/:id",controllerTareas.deleteTarea);

module.exports = router;

