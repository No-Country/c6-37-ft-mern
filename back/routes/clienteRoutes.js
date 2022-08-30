import express from 'express';

import { updateCliente, getClientes, getCliente, createCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', getClientes);
router.get('/:email', getCliente);
router.post('/', createCliente);
router.put('/:email', updateCliente);
router.delete('/:email', deleteCliente);

export default router;