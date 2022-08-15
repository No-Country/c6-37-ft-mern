import express from 'express';

import { getClientes, createCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', getClientes);
router.post('/', createCliente);
router.delete('/:id', deleteCliente);

export default router;