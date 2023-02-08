import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/Users.js';

const route = express.Router();

route.get('/users', getUsers);
route.get('/users/:id', getUserById);
route.post('/users', createUser);
route.put('/users/:id', updateUser);
route.delete('/users/:id', deleteUser);

export default route;