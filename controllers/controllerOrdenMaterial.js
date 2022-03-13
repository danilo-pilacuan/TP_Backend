const { Op } = require("sequelize");

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
const modeloMaterial = require('../models').Material
const modeloOrdenTrabajo = require('../models').OrdenTrabajo
const modeloOrdenTarea = require('../models').Orden_Tarea
const modeloOrdenMaterial = require('../models').Orden_Material

const fs = require("fs");

module.exports = class controllerOrdenMaterial {

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

    static async getOrdenMateriales(req,res){
        
        modeloOrdenMaterial.findAll({
            include : [
                {model:modeloMaterial},
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
    static async findMaterialesByOrdenId(req,res){
        
        modeloOrdenMaterial.findAll({
            where:{idOrden:req.params.id},
            include : [
                 {model:modeloMaterial},
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

    static async getOrdenMaterialesById(req,res){
        modeloOrdenMaterial.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
    static async createOrdenMaterial(req,res){
        console.log(req.body)
        modeloOrdenMaterial.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editOrdenMaterial(req,res){
        modeloOrdenMaterial.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteOrdenMaterial(req,res){
        modeloOrdenMaterial.destroy({
            where:{id:req.params.id}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteOrdenMaterialByMaterialIdOrdenId(req,res){
        console.log(req.body)
        modeloOrdenMaterial.destroy({
            
            where:{
                [Op.and]: [{idMaterial:req.body.idMaterial},{idOrden:req.body.idOrden}]
                }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }
   
}
