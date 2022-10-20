import { Router } from 'express';
import {
  createClassCharacters,
  deleteClassCharacters,
  getClassCharacters,
  updateClassCharacters,
} from '../controllers/classCharacters.controller.js';

const router = Router();

router.get('/classCharacters', getClassCharacters);
router.post('/classCharacters', createClassCharacters);
router.put('/classCharacters:id', updateClassCharacters);
router.delete('/classCharacters:id', deleteClassCharacters);
router.get('/classCharacters/:id', createClassCharacters);

export default router;
