import { Body, Controller, Get, Param, ParseIntPipe, Post, Res, HttpStatus, Put } from '@nestjs/common';
import { exists } from 'fs';
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
  async create(@Res() res, @Body() personDTO: PersonDTO) {
    const lists = await this.personService.createPerson(personDTO);
    return res.status(HttpStatus.OK).json(
      {message: 'Persona creada exitosamente', lists}
      );
  }

  @Put(':id')
  async updatePerson(@Param('id') id: number, @Body() person) {
    const personToUpdate = this.personService.getPersonById(id);
    if(!exists) {
      return ({message: `No existe una persona con el ${id}` + personToUpdate})
    } else {
      return await this.personService.updatePerson(id, person)
    }
  }

}
