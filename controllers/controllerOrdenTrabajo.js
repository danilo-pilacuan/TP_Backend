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
const modeloTipoMantenimiento = require('../models').TipoMantenimiento
const modeloOrdenTarea = require('../models').Orden_Tarea

const fs = require("fs");

module.exports = class controllerOrdenTrabajo {

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

    static async getOrdenesTrabajo(req,res){
        console.log("Buscando")
        modeloOrdenTrabajo.findAll({
            include : [
                {model:modeloActivo},
                 {model:modeloTaller},
                 {model:modeloArea},
                 {model:modeloTrabajador},
                 {model:modeloMaterial},
                 {model:modeloTarea
                  ,include:[
                      {model:modeloPeriodicidad},
                      {model:modeloEstadoMantenimiento},
                      {model:modeloTipoMantenimiento},
                  ]  
                 },
           ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getOrdenesTrabajoOrdByDate(req,res){
        console.log("Buscando")
        modeloOrdenTrabajo.findAll({
            include : [
                {model:modeloActivo},
                 {model:modeloTaller},
                 {model:modeloArea},
                 {model:modeloTrabajador},
                 {model:modeloMaterial},
                 {model:modeloTarea
                  ,include:[
                      {model:modeloPeriodicidad},
                      {model:modeloEstadoMantenimiento},
                      {model:modeloTipoMantenimiento},
                  ]  
                 },
            ],
            where:{id:1},
            order:['createdAt']
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getOrdenesTrabajoGroupByDay(req,res){
        
        modeloOrdenTrabajo.findAll({
            include : [
                {model:modeloActivo},
                 {model:modeloTaller},
                 {model:modeloArea},
                 {model:modeloTrabajador},
                 {model:modeloMaterial},
                 {model:modeloTarea
                  ,include:[
                      {model:modeloPeriodicidad},
                      {model:modeloEstadoMantenimiento},
                      {model:modeloTipoMantenimiento},
                  ]  
                 },
            ],
            order:['createdAt']
        })
        .then((data)=>{
            console.log(data)
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }


    static async getOrdenTrabajoById(req,res){
        modeloOrdenTrabajo.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloActivo},
                 {model:modeloTaller},
                 {model:modeloArea},
                 {model:modeloTrabajador},
                 {model:modeloMaterial},
                 {model:modeloTarea
                  ,include:[
                    //{model:modeloOrdenTarea},
                      {model:modeloPeriodicidad},
                      {model:modeloEstadoMantenimiento},
                      {model:modeloTipoMantenimiento},
                  ]  
                 },
           ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
    static async createOrdenTrabajo(req,res){
        
        modeloOrdenTrabajo.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editOrdenTrabajo(req,res){
        modeloOrdenTrabajo.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteOrdenTrabajo(req,res){
        modeloOrdenTrabajo.destroy({
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