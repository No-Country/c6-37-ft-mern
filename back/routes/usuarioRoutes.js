import express from 'express';

import { verifyUsuario } from '../controllers/usuarioController';

const router = express.Router();

router.post('/', verifyUsuario);

export default router;