import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import  appointmentRoutes  from './routes/appointmentRoutes';
import credentialRoutes from './routes/credentialRoutes';
import { AppDataSource } from './config/data-source';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// const corsOptions = {
//   // origin: 'http://localhost:3000/',
//   origin: 'http://localhost:5173', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, 
//   optionsSuccessStatus: 204 
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json()); 
app.use('/', userRoutes, appointmentRoutes, credentialRoutes); 

AppDataSource.initialize()
.then(() => { 
  console.log("Database connected")
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch(error => console.log(error))

