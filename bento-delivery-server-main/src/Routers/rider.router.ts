import express from 'express';

import { riderLogin, riderSignup } from '../Controllers/rider.controller';
const riderRouter = express.Router();

riderRouter.post('/signup', riderSignup);
riderRouter.post('/login', riderLogin);

export default riderRouter;
