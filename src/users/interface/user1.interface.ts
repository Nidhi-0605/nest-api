// users/user.model.ts

import { Document } from 'mongoose';

export interface User1 extends Document {
  name: string;
  mobile: Number;
  address: string;
}
