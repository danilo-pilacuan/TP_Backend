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
const modeloImagen = require('../models').Imagen

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var fs = require('fs');


module.exports = class controllerImagenes {

    static async getImagenes(req,res){
        modeloImagen.findAll({
            
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getImagenById(req,res){
        modeloImagen.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async getImagenesByActivoId(req,res){
        console.log("Enter byaid");
        modeloImagen.findAll({
            where:{ idActivo : req.params.idActivo }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createImagen(req,res){
        var imagen = req.body;
        var imagename = req.file.filename;
        imagen.url = imagename;

        modeloImagen.create(imagen)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })

    }

    static async editImagen(req,res){
        modeloImagen.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteImagen(req,res){
        modeloImagen.findOne({
            where:{id:req.params.id}
        })
        .then((data)=>{
            fs.unlinkSync('./uploads/imgs/'+data.url)
            modeloImagen.destroy({
                where:{ id : req.params.id }
            })
            .then((data)=>{
                res.json({resultado:data})
            })
            .catch((error)=>{
                res.json({error:error})
            })
        })
        .catch((error)=>{
            res.json({error:error})
        })
        
    }

   
}