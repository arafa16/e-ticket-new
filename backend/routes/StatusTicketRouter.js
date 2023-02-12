import express from 'express';
import { createStatusTicket, deleteStatusTicket, getStatusTicket, getStatusTicketById, updateStatusTicket } from '../controllers/StatusTicket.js';

const router = express.Router();

router.get('/statusTicket', getStatusTicket);
router.get('/statusTicket/:id', getStatusTicketById);
router.post('/statusTicket', createStatusTicket);
router.delete('/statusTicket/:id', deleteStatusTicket);
router.put('/statusTicket/:id', updateStatusTicket);

export default router;