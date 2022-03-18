import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'person'})
export class PersonEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the Persons
   * @example John
   */
  @Column({ type: 'varchar', length: 20 })
  name: string;

  @ApiProperty({ example: 1, description: 'The surname of the Person' })
  surname: string;

  @ApiProperty({ example: 'Femenino', description: 'The sex of the Person',
  })
  gender: string;

  @ApiProperty({ description: 'The state of the Person' })
  state: string;
  
}
