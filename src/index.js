import express from 'express'
import {
    dirname,
    join
} from 'path'
import {
    fileURLToPath
} from 'url'
//import morgan from 'morgan'

//requiring routes
import indexRoutes from './routes/index.js'

const app = express();
const __dirname = dirname(fileURLToPath(
    import.meta.url))

//settings
app.set('appName', 'Mi primer server')
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
//app.use(morgan('dev'))

/*app.use((req, res, next) => {
    console.log('request url: ' + req.url)
    next()
})*/

//rutas
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

app.get('/*', (req, res) => {
    res.end('Archivo no encontrado!')
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port', process.env.PORT || 3000)
});