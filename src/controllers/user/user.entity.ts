import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user_table'})
export class UserEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() user_name: string;
  @Column() email: string;
  @Column() status: number;
}
