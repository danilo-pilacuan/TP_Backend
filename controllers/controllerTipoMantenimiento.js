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
const modeloTipoMantenimiento = require('../models').TipoMantenimiento;

module.exports = class controllerTipoMantenimiento {
    //fetch all Users
    static async getTiposMantenimiento(req,res){
        modeloTipoMantenimiento.findAll({
            include : [
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

    static async getTipoMantenimientoById(req,res){
        modeloTipoMantenimiento.findOne({
            where:{ id : req.params.id },
            include : [
                {model:modeloTipoMantenimiento}
            ]
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createTipoMantenimiento(req,res){
        modeloTipoMantenimiento.create(req.body)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editTipoMantenimiento(req,res){
        modeloTipoMantenimiento.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteTipoMantenimiento(req,res){
        modeloTipoMantenimiento.destroy({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

   
}