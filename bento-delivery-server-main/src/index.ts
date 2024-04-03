import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
const app: Express = express();
import mongoose from 'mongoose';

dotenv.config();

import config from './config';
import riderRouter from './Routers/rider.router';

app.use(cookieParser());

app.use(
  cors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
  }),
);

app.use(express.json());

// Rider Creation (Sign up)
app.use('/rider', riderRouter);

async function main() {
  try {
    const uri = `mongodb+srv://${config.DB_USER}:${config.DB_PASS}@cluster0.ejwdabx.mongodb.net/bento-rider?retryWrites=true&w=majority`;

    await mongoose.connect(uri, {});
    console.log('Mongoose connected');

    app.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
// Dont forget the call the main function
// main();
main().catch(err => console.error(err));
