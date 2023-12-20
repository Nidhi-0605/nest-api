// users/users.service.ts

import { Injectable ,NotFoundException  } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { User1 } from './interface/user1.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<User>,
    @InjectModel('user1') private readonly user1Model: Model<User1>
    ) {}
// for sign up collection
async create(user:any) {
  const createdUser = new this.userModel(user);
  return createdUser.save();
}

 // for sign up collection
  async findAll(){
    return this.userModel.find().exec();
  }

// for sign up collection
  async findOne(id: string) {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
      throw error;
    }
  }

 // for sign up collection
  async update(id: string, data: any){
  
      const updatedUser = await this.userModel
        .findByIdAndUpdate(id, data)
        .exec();

      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return updatedUser;
    } 

    // for sign up collection
async delete(id: string) {
  const deletedUser = await this.userModel.findByIdAndDelete(id);
  // console.log(deletedUser);
  return deletedUser;
}

// update and delete by email function start

// for sign up collection ,when use email api data it opens
async findOne3(email: string) {
  try {
    return await this.userModel.findOne({ email:email }).exec();
  } catch (error) {
    throw error;
  }
}

// when auth post login api it open
async findOne2(username: string) {
  try {
    return await this.userModel.findOne({ username:username }).exec();
  } catch (error) {
    throw error;
  }
}

// for sign up collection
async updateByEmail(email: string, data: any){

    const updatedUser = await this.userModel
      .findOneAndUpdate({ email }, data)
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return updatedUser;
  } 

// for sign up collection
async deleteByEmail(email: string) {
  const deletedUser = await this.userModel.findOneAndDelete({ email }).exec();
  // console.log(deletedUser);
  return deletedUser;
}

   // update and delete by email function end

    // for login collection
  async create1(user:any) {
    const createdUser = new this.user1Model(user);
    return createdUser.save();
  }

   // for login collection
  async findAll1(){
    // const datas = await this.user1Model.find().exec();
    // console.log(datas);
    return this.user1Model.find().exec();
  }

  // for login collection
  async findOne1(id: string) {
    try {
      return await this.user1Model.findById(id).exec();
    } catch (error) {
      throw error;
    }
  }

   // for login collection
   async update1(id: string, data: any){
  
    const updatedUser = await this.user1Model
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  } 

  // for login collection
  async delete1(id: string) {
    const deletedUser = await this.user1Model.findByIdAndDelete(id);
    // console.log(deletedUser);
    return deletedUser;
  }
  }

  