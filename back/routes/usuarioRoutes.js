import express from 'express';

import { getUsuarios, getUsuario, createUsuario, verifyUsuario, deleteUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:usuario', getUsuario);
router.post('/', verifyUsuario);
router.post('/registrar', createUsuario);
router.delete('/:usuario', deleteUsuario);

export default router;