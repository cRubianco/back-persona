import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('persona')
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

}
