import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entity/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
