import express from 'express';

import { getClientes, createCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', getClientes);
router.post('/', createCliente);
router.delete('/:email', deleteCliente);

export default router;