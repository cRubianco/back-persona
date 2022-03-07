import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './entity/person.entity';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(PersonEntity)
    private personRepository: PersonRepository
  ){}

  async getAllPersons(): Promise<PersonEntity[]> {
    const listPersons = await this.personRepository.find();
    if(!listPersons.length) {
      throw new NotFoundException({message: 'La lista de personas está vacia'});
    }
    return listPersons;
  }

  async getPersonById(id: number): Promise<PersonEntity> {
    const person = await this.personRepository.findOne(id);
    if (!person) {
      throw new NotFoundException({message: `No se encontro ninguna persona con el id ${person.id}.`});
    }
    return person;
  }

}
