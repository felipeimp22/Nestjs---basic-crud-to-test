

import { Document } from "mongoose"
import { Hash } from "crypto"
export class User extends Document {
  name: { string };
  password: Hash;
  email: string
}