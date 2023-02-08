import express from 'express';
import { createStatusTicket, getStatusTicket, getStatusTicketById } from '../controllers/StatusTicket.js';

const router = express.Router();

router.get('/statusTicket', getStatusTicket);
router.get('/statusTicket/:id', getStatusTicketById);
router.post('/statusTicket', createStatusTicket);

export default router;