import { Sequelize } from "sequelize";

const db = new Sequelize('pro_tickets','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;