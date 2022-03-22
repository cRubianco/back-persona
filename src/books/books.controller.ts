import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BookEntity } from 'src/model/entity/book.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

  constructor (private booksService: BooksService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok'})
  async getAllBooks(): Promise<BookEntity[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Book retrieved successfully.'})
  @ApiResponse({ status: 404, description: 'Book not exist.'})
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findById(id);
  }

}
