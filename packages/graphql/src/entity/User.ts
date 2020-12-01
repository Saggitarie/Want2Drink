import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { DrinkingLocation } from './DrinkingLocations';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @OneToMany(() => DrinkingLocation, (photo) => photo.user)
  photos: DrinkingLocation[];
}
