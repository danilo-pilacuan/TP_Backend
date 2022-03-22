const modeloEdificio = require('../models').Edificio;
const modeloArea = require('../models').Area;
const modeloCategoria = require('../models').Categoria;
const modeloTrabajador = require('../models').Trabajador;
const modeloUsuario = require('../models').Usuario;
const modeloPrioridad = require('../models').Prioridad;
const modeloActivo = require('../models').Activo;
const modeloPeriodicidad = require('../models').Periodicidad;
const modeloEstadoMantenimiento = require('../models').EstadoMantenimiento;
const modeloTarea = require('../models').Tarea;
const modeloImagen = require('../models').Imagen
const modeloManual = require('../models').Manual

const fs = require("fs");

module.exports = class controllerManualess {

    static async getManuales(req,res){
        modeloManual.findAll({
            
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getManualById(req,res){
        modeloManual.findAll({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async getManualByActivoId(req,res){
        
        modeloManual.findAll({
            where:{ idActivo : req.params.idActivo }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createManual(req,res){
        console.log("Create")
        console.log(req.body)
        console.log("Create1")
        var manual = req.body;
        console.log("Create2")
        var manualname = req.file.filename;
        console.log("Create3")
        manual.url = manualname;
        console.log("Create4")

        modeloManual.create(manual)
        .then((data)=>{
            res.json({resultado:data})
            console.log("Create5")
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editManual(req,res){
        modeloManual.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteManual(req,res){
        modeloManual.findOne({
            where:{id:req.params.id}
        })
        .then((data)=>{
            fs.unlinkSync('./uploads/docs/'+data.url)

            modeloManual.destroy({
                where:{ id : req.params.id }
            })
            .then((data)=>{
                res.json({resultado:data})
            })
            .catch((error)=>{
                res.json({error:error})
            })
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
}