import express from 'express';

import { createUsuario, verifyUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/', verifyUsuario);
router.post('/registrar', createUsuario);

export default router;