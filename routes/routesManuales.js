const express = require("express");
const router = express.Router();
const controllerManuales = require('../controllers/controllerManuales')
const multer = require("multer")

let storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads/docs');
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("manual");

router.get("/activo/:idActivo",controllerManuales.getManualByActivoId);
router.get("/",controllerManuales.getManuales);

router.get("/:id",controllerManuales.getManualById);
router.post("/",upload,controllerManuales.createManual);
router.patch("/:id",controllerManuales.editManual);
router.delete("/:id",controllerManuales.deleteManual);

module.exports = router;

