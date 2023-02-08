import express from 'express';
import { getStatus, getStatusById, createStatus, deleteStatus } from '../controllers/Status.js';
import { verifyUser } from '../middleware/Auth.js';

const router = express.Router();

router.get('/status', verifyUser, getStatus);
router.get('/status/:id', verifyUser, getStatusById);
router.post('/status', verifyUser, createStatus);
router.delete('/status/:id', verifyUser, deleteStatus)

export default router;