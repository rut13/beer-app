import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authStuff = req.headers.authorization;
  if (authStuff && authStuff === 'Bearer token') {
    next();
  } else {
    res.status(403).send({ error: 'Unauthorized' });
  }
};
