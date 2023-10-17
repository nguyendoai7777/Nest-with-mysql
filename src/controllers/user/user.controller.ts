import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get('')
  async getUser() {
    const data = await this.userService.getAll()
    return {
      message: 'OK',
      code: 200,
      data
    }
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const data = await this.userService.addOneUser(body);
    return {
      message: 'OK',
      code: 200,
      data
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    const data = await this.userService.deleteOne(id);
    return data ? {
      message: 'Delete successfully',
      code: 200,
    } : {
      message: 'Something when wrong',
      code: 406,
    }
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() body: UpdateUserDto) {
    const data = await this.userService.updateOne(id, body);
    return data ? {
      message: 'Update successfully',
      code: 200,
      data
    } : {
      message: 'Record not found, Update failed',
      code: 406,
    }
  }

}
