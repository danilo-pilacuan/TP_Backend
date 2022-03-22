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
const modeloTaller = require('../models').Taller;
const modeloImagen = require('../models').Imagen
const modeloManual = require('../models').Manual
const modeloOrdenTrabajo = require('../models').OrdenTrabajo
const modeloMaterial = require('../models').Material
const modeloTipoMantenimiento = require('../models').TipoMantenimiento;

const fs = require("fs");

module.exports = class controllerMateriales {

    // static async getOrdenesTrabajo(req,res){
    //     modeloOrdenTrabajo.findAll({
            
    //     })
    //     .then((data)=>{
    //         res.json({resultado:data})
    //     })
    //     .catch((error)=>{
    //         res.json({error:error})
    //     })
    
    // }

    static async getMateriales(req,res){
        modeloMaterial.findAll({
            include : [
                {model:modeloOrdenTrabajo}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getMaterialById(req,res){
        modeloMaterial.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloOrdenTrabajo},
           ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async getMaterialByOrdenTrabajoId(req,res){
        modeloMaterial.findAll({
            where:{ idOrdenTrabajo : req.params.id },
            include : [
                {model:modeloOrdenTrabajo},
           ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
    static async createMaterial(req,res){
        
        modeloMaterial.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editMaterial(req,res){
        modeloMaterial.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteMaterial(req,res){
        
        modeloMaterial.destroy({
            where:{id:req.params.id}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
}