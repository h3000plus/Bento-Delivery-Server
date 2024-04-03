import { Schema, model } from 'mongoose';

import { IOrder } from '../../Interfaces/IOrder';
import { itemSchema } from '../helperSchemas/itemSchema.model';
import { Rider } from '../rider/rider.model';

const OrderSchema = new Schema<IOrder>({
  riderId: {
    type: Schema.Types.ObjectId,
    ref: 'Rider',
    required: true,
    validate: {
      validator: (value: string) => Boolean(value) && !!Rider.findById(value),
      message: 'Invalid rider ID',
    },
  },
  customerId: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Number,
    required: true,
  },
  orderItems: {
    type: [itemSchema],
    required: true,
  },
  orderTemperatureType: {
    type: String,
    enum: ['Hot', 'Cold'],
    required: true,
  },
  orderPlacingTime: {
    type: Date,
    required: true,
  },
  orderCompletingTime: {
    type: Date,
  },
  totalOrderPrice: {
    type: Number,
    required: true,
  },
  orderRoute: [
    {
      type: Schema.Types.ObjectId,
      ref: 'LongLat',
    },
  ],
  deliveryPoint: {
    type: Schema.Types.ObjectId,
    ref: 'LongLat',
  },
});

const Order = model<IOrder>('order', OrderSchema);

export default Order;
