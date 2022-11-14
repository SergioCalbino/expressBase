import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import usuariosRoutes from './routes/usuariosRoutes.js'


const app = express();
 dotenv.config();

app.use(express.json()); // Para que express lea los json



// const dominiosPertmitidos = [process.env.FRONTEND_URL]

// const corsOptions = {
//     origin: function(origin, callback) {
//         if (dominiosPertmitidos.indexOf(origin) !== -1) {
//             //El origen del request esta permitido
//             callback(null, true)
//         } else {
//             callback(new Error('No permitido por CORS'))
//         }
//     }
// }

app.use(cors('http://localhost:8000/api/usuarios'))

app.use('/api/usuarios', usuariosRoutes ); // De esta forma accedo al router de veterinarios. app.tmb es una tura


const PORT = process.env.PORT || 800

app.listen(PORT, () => {
    console.log(`Servido funcionando en puerto ${PORT}`)
});
