import express from 'express';

import { getAppointments, getAppointment, createAppointment, deleteAppointment } from '../controllers/AppointmentController.js';

const router = express.Router();

router.get('/', getAppointments);
router.get('/:_id', getAppointment);
router.post('/', createAppointment);
router.delete('/:_id', deleteAppointment);

export default router;