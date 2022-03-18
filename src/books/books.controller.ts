import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor (private booksService: BooksService) {}

  @Get()
  getAllBooks(){
    return this.booksService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findById(id);
  }

}
