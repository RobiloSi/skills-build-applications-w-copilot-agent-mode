import express from 'express';
import cors from 'cors';
import apiRouter from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API running' });
});

export default app;
