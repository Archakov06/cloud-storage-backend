import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FileEntity } from '../../files/entities/file.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: FileEntity[];
}
