import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'persons'})
export class PersonEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the Persons
   * @example John
   */
  @Column({ type: 'varchar', length: 40, nullable: false })
  name: string;

/*   @ApiProperty({ example: 1, description: 'The surname of the Person' })
  surname: string; */
  @Column({ type: 'varchar', length: 40, nullable: false })
  surname: string;

/*   @ApiProperty({
    example: 'Femenino',
    description: 'The sex of the Person',
  })
  gender: string; */
  @Column()
  state: boolean;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
}
