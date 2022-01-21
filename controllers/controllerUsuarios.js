const modeloCaracteristicaEquipo = require('../models').CaracteristicaEquipo
const modeloDependencia = require('../models').Dependencia
const modeloEquipo = require('../models').Equipo
const modeloEstadoEquipo = require('../models').EstadoEquipo
const modeloFichaMantenimiento = require('../models').FichaMantenimiento
const modeloFuncionario = require('../models').Funcionario
const modeloImagen = require('../models').Imagen
const modeloInventario = require('../models').Inventario
const modeloMetrica = require('../models').Metrica
const modeloTipoCaracteristicaEquipo = require('../models').TipoCaracteristicaEquipo
const modeloTipoEquipo = require('../models').TipoEquipo
const modeloUsuario = require('../models').Usuario

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = class controllerUsuarios {

    static async getUsuarios(req,res){
        modeloUsuario.findAll({
            
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    
    }

    static async getUsuarioById(req,res){
        modeloUsuario.findOne({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async createUsuario(req,res){
        var usuario = req.body;
        if(!usuario.hasOwnProperty('contrasenia'))
        {
            var generator = require('generate-password');
            var password = generator.generate({
                length: 10,
                numbers: true
            });
            usuario['contrasenia']=password;
            console.log(password)
        }
        if(usuario.contrasenia=="")
        {
            var generator = require('generate-password');
            var password = generator.generate({
                length: 10,
                numbers: true
            });
            usuario['contrasenia']=password;
            console.log(password)
        }

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(usuario['contrasenia'],salt);

        // usuario['contrasenia']=hashedPassword;

        modeloUsuario.create(usuario)
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async editUsuario(req,res){
        modeloUsuario.update(req.body,{
            where: { id: req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }

    static async deleteUsuario(req,res){
        modeloUsuario.destroy({
            where:{ id : req.params.id }
        })
        .then((data)=>{
            res.json({resultado:data})
        })
        .catch((error)=>{
            res.json({error:error})
        })
    }


    static async login(req,res){
        modeloUsuario.findOne({
            where:{ correo:req.body.correo}
        })
        .then((data)=>{
            //console.log(data)
            // if(!await bcrypt.compare(req.body.password,data.password)){
            //     return res.status(400).send({message: "invalid credentials"});
            // }
            // else
            // {
            //     const token = jwt.sign({_id: data.id}, "secret") //colocar secret en archivo .env
            //     res.cookie('jwt',token,{
            //         httpOnly: true,
            //         maxAge: 24*60*60*1000 //1 dia
            //     })
            //     res.status(200).send({message: "success"});
            // }
            //res.json({resultado:data})
            //console.log("formpass: "+req.body.contrasenia)
            //console.log("userpass: "+data.contrasenia)
            if(req.body.contrasenia==data.contrasenia)
            {
                const token = jwt.sign({id: data.id}, "secret") //colocar secret en archivo .env
                res.cookie('jwt',token,{
                    httpOnly: true,
                    maxAge: 24*60*60*1000 //1 dia
                })
                res.status(200).send({resultado: "success"});
                
            }
            else
            {
                return res.status(400).send({error: "invalid credentials"});
            }
        })
        .catch((error)=>{
            return res.status(404).send({error: "User not found"});
            //res.json({error:error})
        })
        
    }


    static async authLogin(req,res){
        try{
            const cookie = req.cookies['jwt'];
            const claims = jwt.verify(cookie,"secret"); //desencriptar jwt con la clave entre comillas, debe estar en el .env
            if(!claims){
                return res.status(401).send({ error: "unauthenticated"});
            }
            else
            {
                ////////////////////////////////////

                modeloUsuario.findOne({
                    where:{ id:claims.id}
                })
                .then((data)=>{
                    const {password,...userData} = data.toJSON();
                    res.json({resultado:userData})
                })
                .catch((error)=>{
                    return res.status(404).send({error: "User not found"});
                    //res.json({error:error})
                })

                ////////////////////////////////////

                // const user = await User.findOne({ _id : claims._id});
                // const {password, ...data} = user.toJSON()
                // res.send(data);
            }
        }catch(e)
        {
            return res.status(401).send({resultado:"unauthenticated"});
        }
        
    }
    //logout
    static async logout(req,res){
        res.cookie('jwt','',{maxAge:0});
        res.status(200).send({resultado: "success"})
    }

   
}