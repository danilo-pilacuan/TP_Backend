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
module.exports = class controllerEstadoMantenimiento {
    //fetch all Users
    static async getEstadosMantenimiento(req,res){
        modeloEstadoMantenimiento.findAll({
            include : [
                {model:modeloTarea}
            ]
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getEstadoMantenimientoById(req,res){
        modeloEstadoMantenimiento.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createEstadoMantenimiento(req,res){
        modeloEstadoMantenimiento.create(req.body)
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editEstadoMantenimiento(req,res){
        modeloEstadoMantenimiento.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteEstadoMantenimiento(req,res){
        modeloEstadoMantenimiento.destroy({
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