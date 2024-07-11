import { Router } from 'express';
import { getAllBeers, getBeerById, addBeer, rateBeerById, getAllUsers, getUserById, make, login } from './controllers/Controller';

const router = Router();

router.get('/beer', getAllBeers);
router.get('/beer/:id', getBeerById);
router.post('/beer', addBeer);
router.post('/beer/rate', rateBeerById);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/user', make);
router.post('/login', login);

export default router;
