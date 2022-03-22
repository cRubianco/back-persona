import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/model/entity/book.entity';
import { Repository } from 'typeorm';
@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>
  ) {}

  findAll(): Promise<BookEntity[]> {
    return this.bookRepository.find();
  }

  findById(id: number) {
    if (!id) {
      return `No se encontro el libro con el ${id}`
    } else {
      return `Libro con id ${id}`;
    }
  }

  async getBookById(id: number): Promise<BookEntity> {
    const book = await this.bookRepository.findOne(id);
    if (!book) {
      throw new NotFoundException({message: `No se encontro ninguna persona con el id ${book.id}.`});
    }
    return book;
  } 

}
