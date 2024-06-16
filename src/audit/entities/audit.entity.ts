import { Secret } from 'src/secret/entities/secret.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('audit')
export class Audit {
  @PrimaryGeneratedColumn()
  logId: number;

  @ManyToOne(() => User, (user) => user.audits)
  user: User;

  @ManyToOne(() => Secret, (secret) => secret.audits)
  secret: Secret;

  @Column()
  action: string;

  @CreateDateColumn()
  timestamp: Date;
}
