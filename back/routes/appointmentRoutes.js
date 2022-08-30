import express from 'express';

import {
  getAppointments,
  getAppointment,
  createAppointment,
  deleteAppointment,
  getPetAppointments,
  getClientAppointments,
  deleteClientAppointments,
  deletePetAppointments,
} from '../controllers/appointmentController.js';

const router = express.Router();

router.get('/', getAppointments);
router.get('/:_id', getAppointment);
router.get('/pet/:pet', getPetAppointments);
router.delete('/pet/:pet', deletePetAppointments);
router.get('/client/:client', getClientAppointments);
router.delete('/client/:client', deleteClientAppointments);
router.post('/', createAppointment);
router.delete('/:_id', deleteAppointment);

export default router;
