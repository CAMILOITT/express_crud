import { Router } from 'express';
import {
  createCharacter,
  deleteCharacters,
  getCharacter,
  getCharacters,
  updateCharacters,
} from '../controllers/characters.controller.js';

const router = Router();

router.get('/characters', getCharacters);
router.post('/characters', createCharacter);
router.put('/characters:id', updateCharacters);
router.delete('/characters:id', deleteCharacters);
router.get('/characters/:id', getCharacter);

export default router;
