import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  findAll(): string {
    return 'findAll ';
  }

  findById(id: number) {
    if (!id) {
      return `No se encontro el libro con el ${id}`
    } else {
      return `Libro con id ${id}`;
    }
  }

}
