import express from 'express'
import { getPets, getById, createPet, deletePet } from '../controllers/petController.js'

const router = express.Router()

router.get('/', getPets)
router.get('/:_id', getById)
router.post('/', createPet)
router.delete('/:_id', deletePet)

export default router;