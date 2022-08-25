import express from 'express';
import {
  getPets,
  getPet,
  getOwnerPets,
  createPet,
  deletePet,
  updatePet,
} from '../controllers/petController.js';

const router = express.Router();

router.get('/', getPets);
router.get('/:_id', getPet);
router.get('/owner/:owner', getOwnerPets);
router.post('/', createPet);
router.put('/:_id', updatePet);
router.delete('/:_id', deletePet);

export default router;
