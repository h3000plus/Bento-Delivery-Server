import { ILongLat } from './ILongLat';
import { IOrder } from './IOrder';

export interface IRider {
  _id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  vehicleType: string; // Enum [Car, Bike, Cycle]
  onlineStatus: boolean;
  riderRating: number;
  currentOrderList: IOrder[];
  currentFirstOrderRoute: ILongLat[];
  currentLatLong: ILongLat;
  currentBagCapacity: string;
}
