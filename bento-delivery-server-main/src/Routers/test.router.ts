import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/user', (req: Request, res: Response) => {
  res.json('Hello from user');
});

export default router;
