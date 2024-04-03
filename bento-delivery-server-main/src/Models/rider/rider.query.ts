import { ISignup } from '../../Interfaces/ISignup';

import { Rider } from './rider.model';

// To Create/Signup new rider in db
export async function registerNewRiderInDB(riderInfo: ISignup) {
  try {
    console.log('from inside query', riderInfo);
    const savedDataInDb = await Rider.create(riderInfo);
    return savedDataInDb;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}

// Get the email and password of a rider by searching with email
export async function findRiderFromDB(email: string) {
  try {
    const rider = await Rider.findOne({ email });
    return rider;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}
