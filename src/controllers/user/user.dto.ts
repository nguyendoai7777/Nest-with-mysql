import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString() @IsNotEmpty() user_name: string;
  @IsString() @IsNotEmpty() email: string;
  @IsNumber() @IsNotEmpty() status: number;
}

export class UpdateUserDto {
  @IsString() @IsNotEmpty() user_name?: string;
  @IsString() @IsNotEmpty() email?: string;
  @IsNumber() @IsNotEmpty() status?: number;
}
