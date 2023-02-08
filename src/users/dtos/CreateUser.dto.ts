/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

// data transfer object
export class CreateUserDto {
  @IsNotEmpty()
  Name: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

 // @IsNotEmpty()
  @IsPhoneNumber()
  Number: string;

  @IsNotEmpty()
  Gender: string;
}
