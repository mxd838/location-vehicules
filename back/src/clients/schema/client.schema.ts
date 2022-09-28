import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  birthdate: String,
  email: String,
  phone: String,
});
