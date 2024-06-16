import { Secret } from 'src/secret/entities/secret.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  permissionId: number;

  @ManyToOne(() => User, (user) => user.permissions)
  user: User;

  @ManyToOne(() => Secret, (secret) => secret.permissions)
  secret: Secret;

  @Column()
  accessLevel: string;
}
