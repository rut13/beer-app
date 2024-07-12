import { Router } from 'express';
import { getAllBeers, getBeerById, addBeer, rateBeerById, getAllUsers, getUserById, make, login, checkStuff, recommendBeers, ISHETALTIJDVOORBIER} from './controllers/Controller';

var r = Router();

r.get('/beer', getAllBeers);
r.get('/beer/:id', getBeerById);
r.post('/beer', addBeer);
r.post('/beer/rate', rateBeerById);
r.get('/ISHETALTIJDVOORBIER', ISHETALTIJDVOORBIER);
r.get('/beer/recommend/:budget/:type', recommendBeers);
r.get('/user', getAllUsers);
r.get('/user/:id', getUserById);
r.post('/user', make);  
r.post('/user/check/:number', checkStuff);
r.post('/login', login);

export default r;
