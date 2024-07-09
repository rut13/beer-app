import express from 'express';
import router from './routes';
import * as logger from './other/logging';
import { auth } from './other/secure-auth';
import { logRoutes } from './routelogging';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(logger('Request received')); add logging
app.use('/api', auth, router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  logRoutes(app)
});
