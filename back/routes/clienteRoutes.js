import express from 'express';

import { getClientes, createCliente, deleteCliente } from '../controllers/clienteController';

const router = express.Router();

router.get('/', getClientes);
router.post('/', createCliente);
router.delete('/:id', deleteCliente);

export default router;