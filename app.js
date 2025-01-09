import express ,{json} from 'express';
import helmet from 'helmet';
import routes from './routes/index.js';
import cors from 'cors';
import morgan from 'morgan';
import './controllers/socialMediaAuth.js';  // Asegúrate de que se configure passport
import session from 'express-session';
import passport from 'passport';



const app = express()

app.use(json())

app.use(cors())

// Configuración de la sesión
app.use(session({
    secret: 'victorcamacaro',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // Cambia a true en producción con HTTPS
  }));
  
  // Inicializa passport y sesiones
  app.use(passport.initialize());
  app.use(passport.session());

app.use(helmet())

app.use(morgan('dev'))

app.disable('x-powered-by')

app.get('/',(req,res)=>{
    res.json({ message : 'hello world' })
})


app.use(routes)

const PORT = process.env.PORT ?? 3000


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})