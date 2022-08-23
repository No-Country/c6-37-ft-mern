import express from 'express';

import { updateCliente, getClientes, getCliente, createCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', getClientes);
router.get('/:_id', getCliente);
router.post('/', createCliente);
router.delete('/:_id', deleteCliente);
router.put('/:_id', updateCliente);

export default router;