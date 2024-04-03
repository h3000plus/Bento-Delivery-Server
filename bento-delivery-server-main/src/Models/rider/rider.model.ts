import mongoose from 'mongoose';

import { IRider } from '../../Interfaces/IRider';
const { Schema } = mongoose;

const RiderSchema = new Schema<IRider>({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    enum: ['Car', 'Bike', 'Cycle'],
    required: true,
  },
  onlineStatus: {
    type: Boolean,
    default: false,
  },
  riderRating: {
    type: Number,
    default: 0,
  },
  currentOrderList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  currentFirstOrderRoute: [
    {
      type: Schema.Types.ObjectId,
      ref: 'LongLat',
    },
  ],
  currentLatLong: {
    type: Schema.Types.ObjectId,
    ref: 'LongLat',
  },
  currentBagCapacity: {
    type: String,
    required: true,
    default: ' X X X ',
  },
});

export const Rider = mongoose.model('rider', RiderSchema);
