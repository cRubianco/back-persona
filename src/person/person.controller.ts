import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PersonDTO } from '../model/dto/personDTO';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {

  constructor(private readonly personService: PersonService) {}

  @Get()
  getAllPerson(){
    return this.personService.getAllPersons();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.personService.getPersonById(id);
  }

  @Post()
  async create(@Body() personDTO: PersonDTO) {
    return await this.personService.createPerson(personDTO);
  }

}
