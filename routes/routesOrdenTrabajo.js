const express = require("express");
const router = express.Router();
const controllerOrdenTrabajo = require('../controllers/controllerOrdenTrabajo')

router.get("/",controllerOrdenTrabajo.getOrdenesTrabajo);
router.get("/ByDate",controllerOrdenTrabajo.getOrdenesTrabajoOrdByDate);
router.get("/GroupByDay",controllerOrdenTrabajo.getOrdenesTrabajoGroupByDay);
router.get("/:id",controllerOrdenTrabajo.getOrdenTrabajoById);
router.post("/",controllerOrdenTrabajo.createOrdenTrabajo);
router.patch("/:id",controllerOrdenTrabajo.editOrdenTrabajo);
router.delete("/:id",controllerOrdenTrabajo.deleteOrdenTrabajo);

module.exports = router;

