import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { User } from './User';

@Entity()
export class DrinkingLocation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  locationName: string;

  @Column('float')
  longitude: number;

  @Column('float')
  latitude: string;

  @Column('timestamp with time zone')
  createdAt: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
