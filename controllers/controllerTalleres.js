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

const fs = require("fs");

module.exports = class controllerTalleres {

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

    static async getTalleres(req,res){
        
        modeloTaller.findAll({
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

    static async getTallerById(req,res){
        modeloTaller.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
    static async createTaller(req,res){
        
        modeloTaller.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editTaller(req,res){
        modeloTaller.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTaller(req,res){
        modeloTaller.destroy({
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
