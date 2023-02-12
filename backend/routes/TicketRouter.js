import express from 'express';
import {
    getTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
} from '../controllers/Tickets.js';

const route = express.Router();

route.get('/tickets', getTickets);
route.get('/tickets/:id', getTicketById);
route.post('/tickets', createTicket);
route.put('/tickets', updateTicket);
route.delete('/tickets', deleteTicket);

export default route;