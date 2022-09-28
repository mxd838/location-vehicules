import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
  type: String,
  brand: String,
  model: String,
  licensePlate: String,
  state: String,
  pricePerDay: Number,
});
