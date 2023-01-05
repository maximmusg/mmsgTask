import  express  from "express";
const router = express.Router();

import {registrar, autenticar} from '../controllers/usuarioController.js'

//autenticacion , registro y confirmaciones de usuarios

router.post('/', registrar); //crea un nuevo usuario
router.post("/login", autenticar);



export default router;