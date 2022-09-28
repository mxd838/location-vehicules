import * as mongoose from 'mongoose';

export const RentingSchema = new mongoose.Schema({
  vehicleId: String,
  clientId: String,
  beginDate: String,
  endDate: String,
});
