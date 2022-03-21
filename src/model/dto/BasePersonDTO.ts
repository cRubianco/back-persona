import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class BasePersonDTO {
  
  // Etiqueta decoradora básica @ApiProperty 
  // en el DTO CreateCatDto para que se muestre en Swagger
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  readonly name: string;
  
  @ApiProperty()
  @IsString()
  readonly surname: string;

  @ApiProperty()
  readonly state: boolean;
    
}