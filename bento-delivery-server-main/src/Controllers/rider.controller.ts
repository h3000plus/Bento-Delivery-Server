import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { ILogin } from '../Interfaces/ILogin';
import { IRider } from '../Interfaces/IRider';
import { ISignup } from '../Interfaces/ISignup';
import { findRiderFromDB, registerNewRiderInDB } from '../Models/rider/rider.query';

// To Create/Signup new rider in db
export async function riderSignup(req: Request, res: Response) {
  try {
    const signUpInfo = req.body as ISignup;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(signUpInfo.password, salt);
    signUpInfo.password = hashedPassword;

    const signupResult = await registerNewRiderInDB(signUpInfo);
    res.status(201).json({ message: 'Rider Created', data: signupResult });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

// Rider Login
export async function riderLogin(req: Request, res: Response) {
  try {
    const loginInfo = req.body as ILogin;
    const riderInfo = (await findRiderFromDB(loginInfo.email)) as IRider;
    // console.log('rider info from controller', riderInfo);
    // const hashedPassFromDB = riderInfo.password;
    console.log(riderInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}
