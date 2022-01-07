const express = require("express");
const router = express.Router();
const controllerPeriodicidades = require('../controllers/controllerPeriodicidades')

router.get("/",controllerPeriodicidades.getPeriodicidades);
router.get("/:id",controllerPeriodicidades.getPeriodicidadById);
router.post("/",controllerPeriodicidades.createPeriodicidad);
router.patch("/:id",controllerPeriodicidades.editPeriodicidad);
router.delete("/:id",controllerPeriodicidades.deletePeriodicidad);

module.exports = router;

