/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findUsers() {
    return this.userRepository.find();
  }

  sortUsers(col:string, sort: string) {
    const query=`SELECT * FROM users ORDER BY ${col} ${sort}`; 
    return this.userRepository.query(query);
  }
  findUser(id: number) {
   return this.userRepository.findOne({where :{id: id}});
  }
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails
    });
    this.userRepository.save(newUser);
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    this.userRepository.delete({ id });
  }
}
