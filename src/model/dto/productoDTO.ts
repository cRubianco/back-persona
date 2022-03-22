import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class ProductDTO  {  

  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  readonly made: string;
  
  @ApiProperty()
  @IsString()
  readonly model: string;

  @ApiProperty()
  readonly stock: number;
  
}