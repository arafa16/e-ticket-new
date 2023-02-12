import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/Users.js';
import { verifyUser } from '../middleware/Auth.js';

const route = express.Router();

route.get('/users',  getUsers);
route.get('/users/:id', verifyUser, getUserById);
route.post('/users', createUser);
route.put('/users/:id', verifyUser, updateUser);
route.delete('/users/:id', verifyUser, deleteUser);

export default route;