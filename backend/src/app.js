import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import releasesRouter from './routes/releases.js';

export function buildApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/api/releases', releasesRouter);

  app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    console.error(err);
    res.status(500).json({ message: 'Unexpected server error' });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
