import express from 'express';
import webRouter from './src/routes/web.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
console.log(process.env.FRONTEND_REQUEST_SRC);
app.use(cors({
    origin: process.env.FRONTEND_REQUEST_SRC
}))
app.use('/v1/', webRouter);
export default app;