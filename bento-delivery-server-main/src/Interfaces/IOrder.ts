import mongoose from 'mongoose';

import { ILongLat } from './ILongLat';

// MAIN IN THE FILE
export interface IOrder {
  _id?: mongoose.Schema.Types.ObjectId;
  riderId: mongoose.Schema.Types.ObjectId;
  customerId: string;
  restaurantId: number;
  orderItems: IItem[];
  orderTemperatureType: string; //Enum[Hot, Cold]
  totalOrderPrice: number;
  orderPlacingTime: Date;
  orderCompletingTime: Date;
  orderRoute: ILongLat[]; //array of arrays(coordinates geojson)
  deliveryPoint: ILongLat; //[lon, lat]
}

export interface IOption {
  id: number;
  ingredientName: string;
  unitOfStock: string;
  quantity: number;
  costPerUnit: number;
  caloriesPerUnit: number;
  price: string;
  _id: string;
}

export interface IIngredient {
  id: number;
  restaurantId?: number;
  ingredientName: string;
  unitOfStock: string;
  quantity: number;
  costPerUnit: number;
  caloriesPerUnit: number;
  _id: string;
}

export interface IPacking {
  id: number;
  boxName: string;
  currentStockQuantity: number;
  unitOfPrice: string;
  costPerUnit: number;
  reorderPoint: number;
  unitOfDimentions: string;
  dimensions: string;
  weightLimit: number;
  temperatureLimit: number;
  waterproof: string;
  expectedStockForToday: number;
  expectedStockForTomorrow: number;
  restaurantId: number;
  createdAt: Date;
  updatedAt: Date;
  quantity?: number;
}

export interface IRecipe {
  restaurantId: number;
  recipeId: number;
  recipeName: string;
  recipeItemPortionSize: number;
  recipeItemPreparationTime: number;
  recipeItemCost: number;
  recipeItemCalories: number;
  ingredients: IIngredient[];
  _id: string;
}

export interface IItem {
  _id: string;
  restaurantId: number;
  categoryId: string;
  mealTimeId: number;
  item: {
    _id: string;
    itemId: number;
    itemName: string;
    itemImage: string;
    itemDescription: string;
    itemQuantity: number;
    itemPreparationTime: number;
    itemPackingType: IPacking;
    itemLastingTime?: number;
    itemPortionSize: string;
    ingredients?: { rawIngredients: IIngredient[]; recipes: IRecipe[] };
    options: { add: IOption[]; no: IOption[] };
    chosenOptions?: { add: IOption[]; no: IOption[] };
    optionalNotes?: string;
    discount?: number;
    isDisabled?: boolean;
    itemPrice: number;
    itemCalories: number;
    timeOfDay: string[];
    itemProfileTastyTags: string[];
    typeOfFoods: string[];
    servingTemperature: number;
    itemDietaryRestrictions: string[];
  };
}
