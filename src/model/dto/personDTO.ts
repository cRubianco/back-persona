import { ApiProperty } from '@nestjs/swagger';
import { BasePersonDTO } from './BasePersonDTO';

export class PersonDTO extends BasePersonDTO {
  
  // Etiqueta decoradora básica @ApiProperty 
  // en el DTO PersonDto para que se muestre en Swagger
  @ApiProperty({enum: ['Femenino', 'Masculino']})
  readonly gender: string;

}