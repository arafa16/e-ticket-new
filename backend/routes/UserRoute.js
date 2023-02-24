import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    findUsers
} from '../controllers/Users.js';
import { verifyUser } from '../middleware/Auth.js';

const route = express.Router();

route.get('/users/:limit&:page', getUsers);
route.get('/findUsers/:name',  findUsers);
route.get('/users/:id', verifyUser, getUserById);
route.post('/users', createUser);
route.put('/users/:id', verifyUser, updateUser);
route.delete('/users/:id', verifyUser, deleteUser);

export default route;