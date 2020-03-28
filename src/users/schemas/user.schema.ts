import * as mongoose from 'mongoose';
import { Hash } from 'crypto';
export const UserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Password: String,
  Email: String
})