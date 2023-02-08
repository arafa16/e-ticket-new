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
route.get('/ticket/:id', getTicketById);
route.post('/tickets', createTicket);
route.put('/tickets', updateTicket);
route.delete('/tickets', deleteTicket);

export default route;