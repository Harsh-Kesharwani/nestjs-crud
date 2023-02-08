import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  Name: string;

  @Column()
  Email: string;

  @Column()
  Number: string;

  @Column()
  Gender: string;
}
