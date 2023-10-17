import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../controllers/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123qwe123qwe',
      database: 'mydb',
      entities: [
        /*'src/!**!/!*.entity.{ts,js}', */  // for without webpack (HMR)
        UserEntity
      ],
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
