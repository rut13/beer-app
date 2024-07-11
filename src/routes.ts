import { Router } from 'express';
import { getAllBeers, getBeerById, addBeer, rateBeerById, getAllUsers, getUserById, make, login } from './controllers/Controller';

var r = Router();

r.get('/beer', getAllBeers);
r.get('/beer/:id', getBeerById);
r.post('/beer', addBeer);
r.post('/beer/rate', rateBeerById);
r.get('/user', getAllUsers);
r.get('/user/:id', getUserById);
r.post('/user', make);
r.post('/login', login);

export default r;
