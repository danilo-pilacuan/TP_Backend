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
module.exports = class controllerPrioridades {
    //fetch all Users
    static async getPrioridades(req,res){
        modeloPrioridad.findAll({
            include : [
                {model:modeloActivo}
            ]
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getPrioridadById(req,res){
        modeloPrioridad.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createPrioridad(req,res){
        modeloPrioridad.create(req.body)
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editPrioridad(req,res){
        modeloPrioridad.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deletePrioridad(req,res){
        modeloPrioridad.destroy({
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