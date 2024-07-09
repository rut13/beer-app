import { Request, Response } from 'express';
import { getBeers, getBeer, addNewBeer, rateBeer } from '../other/beer-service';
import * as rating from '../other/beerratingcomponent.js';
import { getUsers, getUser, addUser, authenticate } from '../other/userservice';

export const getAllBeers = (req: Request, res: Response) => {
  res.json(getBeers());
};

export const getBeerById = (req: Request, res: Response) => {
  const beer = getBeer(req.params.id);
  if (beer) {
    res.json(beer);
  } else {
    res.status(404).send({ error: 'Beer not found' });
  }
};

export const addBeer = (req: Request, res: Response) => {
  const newBeer = addNewBeer(req.body);
  res.status(201).json(newBeer);
};

export var rateBeerById = (req: Request, res: Response) => {
  const { id, rating } = req.body;
  const beer = rateBeer(id, rating);
  if (beer) {
    res.json(beer);
  } else {
    res.status(404).send({ error: 'Beer not found' });
  }
};

export const getAllUsers = (req: Request, res: Response) => {
  res.json(getUsers());
};

export const getUserById = (req: Request, res: Response) => {
  const user = getUser(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
};

export const createUser = (req: Request, res: Response) => {
  const newUser = addUser(req.body);
  res.status(201).json(newUser);
};

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = authenticate(username, password);
  if (user) {
    res.json(user);
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
};

