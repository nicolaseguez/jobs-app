import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
config();

import {conn} from './db';
import {router as jobRouter} from './jobs';

const app = express();

if (process.env.NODE_ENV === 'development') {
  conn.sync({ force: true });
}

app.use(cors());
app.use('/jobs', jobRouter);

app.listen(3000, '0.0.0.0', () => {
  console.log('App started on port 3000');
});