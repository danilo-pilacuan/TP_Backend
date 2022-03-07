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
    origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200','http://localhost:8082']
}))
app.use(cookieParser())
//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("uploads/imgs"))
app.use(express.static("uploads/docs"))


app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})




app.use('/api/activos',require('./routes/routesActivos'))
app.use('/api/areas',require('./routes/routesAreas'))
app.use('/api/categorias',require('./routes/routesCategorias'))
app.use('/api/edificios',require('./routes/routesEdificios'))
app.use('/api/estadomantenimiento',require('./routes/routesEstadoMantenimiento'))
app.use('/api/periodicidades',require('./routes/routesPeriodicidades'))
app.use('/api/prioridades',require('./routes/routesPrioridades'))
app.use('/api/tareas',require('./routes/routesTareas'))
app.use('/api/tipomantenimiento',require('./routes/routesTipoMantenimiento'))
app.use('/api/trabajadores',require('./routes/routesTrabajadores'))
app.use('/api/usuarios',require('./routes/routesUsuarios'))
app.use('/api/imagenes',require('./routes/routesImagenes'))
app.use('/api/manuales',require('./routes/routesManuales'))
app.use('/api/ordentrabajo',require('./routes/routesOrdenTrabajo'))
app.use('/api/taller',require('./routes/routesTalleres'))
app.use('/api/materiales',require('./routes/routesMateriales'))
app.use('/api/ordenTareas',require('./routes/routesOrdenTarea'))
app.use('/api/ordenMateriales',require('./routes/routesOrdenMaterial'))

//crear modelo imagenes y modelo tipoMantenimiento
//aniadir ficha de activo, ficha tecnica y manual de usuario, historial de mantenimientos

app.listen(3000,()=>{
    console.log('Server UP running at: localhost:3000')
})