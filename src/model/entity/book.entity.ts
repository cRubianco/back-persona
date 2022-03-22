import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'books'})
export class BookEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The title of book
   * @example The Principe
   */
  @Column({ type: 'varchar', length: 50 })
  title: string;

  // @ApiProperty({ example: 1, description: 'The surname of the Person' })
  @Column({ type: 'varchar', length: 50 })
  subtitle: string;

  @Column({ type: 'varchar', length: 50 })
  isbn: string;


}
