import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Notification = db.define('types_notifications',{
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    type:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: false,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Notification;