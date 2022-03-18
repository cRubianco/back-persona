import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {}

  @Get()
  listBooks() {
    return this.booksService.findAll();
  }
  
}
