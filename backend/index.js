import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import SequelizeStore from 'connect-session-sequelize';

import db from './config/Database.js';

import UserRouter from './routes/UserRoute.js';
import TicketRouter from './routes/TicketRouter.js';
import AuthRouter from './routes/AuthRouter.js';

dotenv.config();

const app = express();

//cara menyimpan session di database
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});



// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    //menyimpan session store ke session
    store: store,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: process.env.LINK
}))

app.use(express.json());

//router
app.use(UserRouter);
app.use(TicketRouter);
app.use(AuthRouter);

// store.sync();

app.listen(process.env.PORT, ()=> {
    console.log("server running..")
})