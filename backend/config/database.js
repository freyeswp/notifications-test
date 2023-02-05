import { Sequelize } from "sequelize";

const db = new Sequelize('notifications_test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

await db.sync({ force: true });
console.log("All models were synchronized successfully.");

export default db;