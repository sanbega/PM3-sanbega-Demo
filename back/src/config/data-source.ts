import {DataSource} from "typeorm"
import dotenv from "dotenv"
import User from "../entities/User";
import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number (process.env.DB_PORT) ,
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
    synchronize: true,
    logging: true,
    dropSchema: true,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})