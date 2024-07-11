import express from 'express';
import r from './routes';
import { logger, errorLogger } from './other/logging';
import { auth } from './other/secure-auth';
import { log } from './routelogging';
import { Connector } from './other/connector';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(logger('Request received')); add logging
app.use('/api', auth, r);
app.use(async (req, res, next) => {
  logger('Request received');
  await Connector.connect();
  next();
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  log(app)
});
