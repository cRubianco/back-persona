import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'book'})
export class BookEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the Persons
   * @example John
   */
  @Column({ type: 'varchar', length: 50 })
  title: string;

  // @ApiProperty({ example: 1, description: 'The surname of the Person' })
  @Column({ type: 'varchar', length: 50 })
  subtitle: string;

  @Column({ type: 'varchar', length: 50 })
  isbn: string;


}
