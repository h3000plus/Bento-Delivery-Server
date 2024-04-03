import { Schema, model } from 'mongoose';

import { ILongLat } from '../../Interfaces/ILongLat';

const LongLatSchema = new Schema<ILongLat>({
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
});

const LongLat = model<ILongLat>('order', LongLatSchema);

export default LongLat;
