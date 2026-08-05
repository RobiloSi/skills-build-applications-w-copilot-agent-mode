import express from 'express';
import cors from 'cors';
import apiRouter from './routes.js';
import { getAllowedOrigins } from './config/environment.js';

const app = express();
const allowedOrigins = getAllowedOrigins(process.env.CODESPACE_NAME);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  }
}));

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API running' });
});

export default app;
