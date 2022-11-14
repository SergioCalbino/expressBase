import  express  from 'express';
// const { Router } = require('express');
import { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } from '../controllers/usuarios.js'

const router = express.Router();

router.get('/', usuariosGet);

router.post('/',usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);
  
router.delete('/',usuariosDelete);
  

export default router;