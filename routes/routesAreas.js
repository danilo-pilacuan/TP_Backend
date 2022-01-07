const express = require("express");
const router = express.Router();
const controllerAreas = require('../controllers/controllerAreas')

router.get("/",controllerAreas.getAreas);
router.get("/:id",controllerAreas.getAreaById);
router.post("/",controllerAreas.createArea);
router.patch("/:id",controllerAreas.editArea);
router.delete("/:id",controllerAreas.deleteArea);

module.exports = router;

