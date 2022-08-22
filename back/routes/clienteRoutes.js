import express from 'express';

import { getClientes, getCliente, createCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', getClientes);
router.get('/:email', getCliente);
router.post('/', createCliente);
router.delete('/:email', deleteCliente);

export default router;