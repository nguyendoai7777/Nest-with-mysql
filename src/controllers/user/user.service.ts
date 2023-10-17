import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectDataSource() private ds: DataSource
  ) {

    void this.ds.query(`
     
     
    `)
  }

  async getAllByRawQuery() {
    const data = await this.ds.query(`
      SELECT * FROM user_table WHERE id = 20;
    `);
    console.log(data);
  }

  async insertByRawQuery() {
    const data = await this.ds.query(`
      INSERT INTO user_table
      (user_name, email, status)
      VALUES ('199x', 'doai_add@tada.js', 1)
      ;
    `);
    console.log(data);
  }

  async updateByRawQuery() {
    const data = await this.ds.query(`
      UPDATE user_table
      SET user_name = 'doai_update all'
      `
    );
    console.log(data);
  }

  async deleteByRawQuery() {
    const data = await this.ds.query(`
      SELECT * FROM user_table WHERE email LIKE '%.js';
      `
    );
    console.log(data);
  }

  getAll() {
    return this.userRepository.find();
  }

  addOneUser({ status, user_name, email }: CreateUserDto) {
    let userEntity = new UserEntity();
    userEntity.email = email;
    userEntity.status = status;
    userEntity.user_name = user_name;
    return this.userRepository.save(userEntity);
  }

  async findUserById(id: number) {
    return this.userRepository.findOneBy({
      id,
    });
  }

  async deleteOne(id: number) {
    const instance = await this.findUserById(id);
    if (!instance) {
      return false
    }
    await this.userRepository.delete({ id });
    return  true;

  }

  async updateOne(id: number, { user_name, email, status }: UpdateUserDto) {
    const instance = await this.findUserById(id);
    if (!instance) {
      return false
    }

    const newInstance = {
      ...instance,
      user_name,
      email,
      status
    };
    return await this.userRepository.save(newInstance);
  }

}
