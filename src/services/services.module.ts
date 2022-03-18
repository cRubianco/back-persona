import { Module } from '@nestjs/common';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books/books.service';
import { PersonModule } from 'src/person/person.module';
import { ProductsController } from 'src/products/products.controller';

@Module({
  imports: [
  ],
  controllers: [ProductsController, BooksController], 
  providers: [
    PersonModule, BooksService,
  ]
})
export class ServicesModule {}
