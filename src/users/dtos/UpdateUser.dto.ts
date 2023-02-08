/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  Name: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

//  @IsNotEmpty()
  @IsPhoneNumber()
  Number: string;

  @IsNotEmpty()
  Gender: string;
}
