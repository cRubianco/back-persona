import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class BasePersonDTO {
  
  @IsInt()
  id: number;

  @IsString()
  readonly name: string;
  
  @IsString()
  readonly surname: string;
  

  @ApiProperty({enum: ['Femenino', 'Masculino']})
  readonly gender: string;
  
  
}