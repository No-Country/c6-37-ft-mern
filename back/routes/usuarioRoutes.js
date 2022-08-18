import express from 'express';

import { verifyUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/', verifyUsuario);

export default router;