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

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
module.exports = class controllerTareas {
    //fetch all Users
    static async getTareas(req,res){
        modeloTarea.findAll({
            include : [
                {model:modeloActivo},
                {model:modeloTrabajador},
                {model:modeloPeriodicidad},
                {model:modeloEstadoMantenimiento}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getTareaById(req,res){
        modeloTarea.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createTarea(req,res){
        modeloTarea.create(req.body)
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editTarea(req,res){
        modeloTarea.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTarea(req,res){
        modeloTarea.destroy({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
}