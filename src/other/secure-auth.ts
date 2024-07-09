import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === 'Bearer token') {
    next();
  } else {
    res.status(403).send({ error: 'Unauthorized' });
  }
};
