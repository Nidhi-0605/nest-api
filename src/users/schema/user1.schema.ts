import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type userDocument = HydratedDocument<user1Data>;

@Schema({ collection: 'login',versionKey: false, timestamps: {createdAt: 'created_date',updatedAt: false}})
export class user1Data {
 
  @Prop()
  name: String;

  @Prop()
  mobile: String;

  @Prop()
  address: String;
}

export const user1Schema = SchemaFactory.createForClass(user1Data);