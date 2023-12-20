import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type userDocument = HydratedDocument<userData>;

@Schema({ collection: 'signup',versionKey: false, timestamps: {createdAt: 'created_date',updatedAt: false}})
export class userData {
 
  @Prop()
  username: String;

  @Prop()
  email: String;

  @Prop()
  password: String;

}

export const userSchema = SchemaFactory.createForClass(userData);

