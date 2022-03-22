import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'products'})
export class ProductEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The made of the product
   * @example Dell
   */
  @ApiProperty({ example: 'Dell'})
  @Column({ type: 'varchar', length: 40, nullable: false })
  made: string;

  @ApiProperty({ example: 1, description: 'Modelo: Inspiron 5000' })
  @Column({ type: 'varchar', length: 40, nullable: false })
  model: string;

  @ApiProperty({ example: 24 })
  @Column({ type: 'int'})
  stock: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
}
