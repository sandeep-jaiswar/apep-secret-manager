import { Audit } from 'src/audit/entities/audit.entity';
import { Permission } from 'src/permission/entities/permission.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('secrets')
export class Secret {
  @PrimaryGeneratedColumn()
  secretId: number;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Permission, (permission) => permission.secret)
  permissions: Permission[];

  @OneToMany(() => Audit, (audit) => audit.secret)
  audits: Audit[];
}
