const express=require('express')
const app=express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const modeloEdificio = require('./models').Edificio;
const modeloArea = require('./models').Area;
const modeloCategoria = require('./models').Categoria;
const modeloTrabajador = require('./models').Trabajador;
const modeloUsuario = require('./models').Usuario;
const modeloPrioridad = require('./models').Prioridad;
const modeloActivo = require('./models').Activo;
const modeloPeriodicidad = require('./models').Periodicidad;
const modeloEstadoMantenimiento = require('./models').EstadoMantenimiento;
const modeloTarea = require('./models').Tarea;



app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200']
}))
app.use(cookieParser())
//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})

// app.post('/createCategoria',(req,res)=>{
//     modeloCategoria.create(req.body)
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.post('/createEdificio',(req,res)=>{
//     modeloEdificio.create(req.body)
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.post('/createArea',(req,res)=>{
//     modeloArea.create(req.body)
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.post('/createTrabajador',(req,res)=>{
//     modeloTrabajador.create(req.body)
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/obtenerEdificios',(req,res)=>{
//     modeloEdificio.findAll({
//         include:[{model:modeloArea}]
//     })
//     .then((data)=>{
//         res.json({Edificios:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/obtenerAreas',(req,res)=>{
//     modeloArea.findAll({
//         include:[
//             {model:modeloEdificio,},
//             {model:modeloTrabajador,as: 'Trabajadores'},
//             {model:modeloActivo}
//         ]
//     })
//     .then((data)=>{
//         res.json({Areas:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/obtenerTrabajadores',(req,res)=>{
//     modeloTrabajador.findAll({
//         include:[{model:modeloArea}]
//     })
//     .then((data)=>{
//         res.json({Trabajadores:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.get('/obtenerCategorias',(req,res)=>{
//     modeloCategoria.findAll({
//         include:[{model:modeloActivo}]
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

// app.delete('/eliminarEdificio/:id',(req,res)=>{
//     modeloEdificio.destroy({
//         where: {id:req.params.id}
//     })
//     .then((data)=>{
//         res.json({datos:data})
//     })
//     .catch((error)=>{
//         res.json({error:error})
//     })
// })

app.use('/api/activos',require('./routes/routesActivos'))
app.use('/api/areas',require('./routes/routesAreas'))
app.use('/api/categorias',require('./routes/routesCategorias'))
app.use('/api/edificios',require('./routes/routesEdificios'))
app.use('/api/estadomantenimiento',require('./routes/routesEstadoMantenimiento'))
app.use('/api/periodicidades',require('./routes/routesPeriodicidades'))
app.use('/api/prioridades',require('./routes/routesPrioridades'))
app.use('/api/tareas',require('./routes/routesTareas'))
app.use('/api/trabajadores',require('./routes/routesTrabajadores'))
app.use('/api/usuarios',require('./routes/routesUsuarios'))

//crear modelo imagenes y modelo tipoMantenimiento
//aniadir ficha de activo, ficha tecnica y manual de usuario, historial de mantenimientos

app.listen(3000,()=>{
    console.log('Server UP running at: localhost:3000')
})