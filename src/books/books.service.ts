import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  @Get()
  findAll() {
    return `findAll ok`
  }

  @Get('id')
  findByID(id) {
    return `findBook ok`;
  }

  
}
