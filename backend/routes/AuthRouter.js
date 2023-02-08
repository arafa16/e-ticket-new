import express from 'express';
import {Login, Me, Logout} from '../controllers/Auth.js'

const route = express.Router();

route.get('/me', Me);
route.post('/login', Login);
route.delete('/logout', Logout);

export default route;