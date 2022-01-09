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
module.exports = class controllerTrabajadores {
    //fetch all Users
    static async getTrabajadores(req,res){
        modeloTrabajador.findAll({
            include : [
                {model:modeloArea},
                {model:modeloTarea}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getTrabajadorById(req,res){
        modeloTrabajador.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createTrabajador(req,res){
        modeloTrabajador.create(req.body)
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editTrabajador(req,res){
        modeloTrabajador.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({datos:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTrabajador(req,res){
        modeloTrabajador.destroy({
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