import express from 'express';
import {Login, Me, Logout, ResetPassword} from '../controllers/Auth.js'

const route = express.Router();

route.get('/me', Me);
route.post('/login', Login);
route.delete('/logout', Logout);
route.post('/reset', ResetPassword);
route.get('/reset/:id&:token', ResetPassword);

export default route;