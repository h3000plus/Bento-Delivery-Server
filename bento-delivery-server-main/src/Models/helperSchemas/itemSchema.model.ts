import { Schema } from 'mongoose';

import { IItem } from '../../Interfaces/IOrder';

import { optionSchema } from './optionSchema.model';
import { packingSchema } from './packingSchema.model';

export const itemSchema: Schema<IItem> = new Schema({
  _id: { type: String, required: true },
  restaurantId: { type: Number, required: true },
  categoryId: { type: String, required: true },
  mealTimeId: { type: Number, required: true },
  item: {
    _id: { type: String, required: true },
    itemId: { type: Number, required: true },
    itemName: { type: String, required: true },
    itemImage: { type: String, required: true },
    itemDescription: { type: String, required: true },
    itemQuantity: { type: Number, required: true },
    itemPreparationTime: { type: Number, required: true },
    itemLastingTime: { type: Number },
    itemPortionSize: { type: String, required: true },
    optionalNotes: { type: String },
    discount: { type: Number },
    isDisabled: { type: Boolean },
    itemPrice: { type: Number, required: true },
    itemCalories: { type: Number, required: true },
    timeOfDay: { type: [String], required: true },
    itemProfileTastyTags: { type: [String], required: true },
    typeOfFoods: { type: [String], required: true },
    servingTemperature: { type: Number, required: true },
    itemDietaryRestrictions: { type: [String], required: true },
    itemPackingType: { type: packingSchema, required: true },
    options: {
      type: {
        add: [optionSchema],
        no: [optionSchema],
      },
      required: true,
    },
    chosenOptions: {
      type: {
        add: [optionSchema],
        no: [optionSchema],
      },
      required: true,
    },
  },
});
