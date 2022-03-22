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
const modeloOrdenTrabajo = require('../models').OrdenTrabajo
const modeloOrdenTarea = require('../models').Orden_Tarea

const fs = require("fs");

module.exports = class controllerOrdenTareas {

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

    static async getOrdenTareas(req,res){
        
        modeloOrdenTarea.findAll({
            // include : [
            //      {model:modeloActivo},
            //      {model:modeloTaller},
            //      {model:modeloArea},
            //      {model:modeloTrabajador}
            // ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }
    static async findTareasByOrdenId(req,res){
        
        modeloOrdenTarea.findAll({
            where:{idOrden:req.params.id},
            include : [
                 {model:modeloTarea},
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

    static async getOrdenTareasById(req,res){
        modeloOrdenTarea.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
    static async createOrdenTarea(req,res){
        
        modeloOrdenTarea.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editOrdenTarea(req,res){
        modeloOrdenTarea.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editOrdenTareaByTareaIdOrdenId(req,res){
        console.log(req.body)
        modeloOrdenTarea.update(req.body,{
            
            where:{
                [Op.and]: [{idTarea:req.body.idTarea},{idOrden:req.body.idOrden}]
                }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteOrdenTarea(req,res){
        modeloOrdenTarea.destroy({
            where:{id:req.params.id}
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteOrdenTareaByTareaIdOrdenId(req,res){
        console.log(req.body)
        modeloOrdenTarea.destroy({
            
            where:{
                [Op.and]: [{idTarea:req.body.idTarea},{idOrden:req.body.idOrden}]
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
