import express from 'express';
import { createResponsible, getResponsible } from '../controllers/Responsible.js';

const router = express.Router();

router.get('/responsible', getResponsible);
router.post('/responsible', createResponsible);

export default router;