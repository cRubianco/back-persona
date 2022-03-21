import { BadRequestException, Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDTO } from 'src/model/dto/messageDTO';
import { PersonDTO } from '../model/dto/personDTO';
import { PersonEntity } from '../model/entity/person.entity';
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

  async createPerson(personDTO: PersonDTO): Promise<any> {
    // verifico si existe
    // const exists = await this.getPersonByName
    const person = this.personRepository.create(personDTO);
    await this.personRepository.save(person);
    return {message: 'se creo una persona'};
    throw new Error('Method not implemented.');
  }

  async updatePerson(id: number, dto: PersonDTO): Promise<any> {
    const person =  await this.getPersonById(id);
    //Verifico si existe ese ID
    if(!person) {
      throw new BadRequestException({message: 'La persona no existe en la BD'})
    }
    dto.name
     ?  person.name = dto.name
     :  person.name = person.name; 
    dto.surname
     ?  person.surname = dto.surname
     :  person.surname = person.surname; 
     dto.gender 
     ?  person.gender = dto.gender
     :  person.gender = person.gender;
     dto.state
     ?  person.state = dto.state
     :  person.state = person.state; 
     console.log('hola dto', dto);
     
    await this.personRepository.save(person);
    return new MessageDTO(`Se actualizo la persona con el apellido ${person.surname} `);
  }  

  async deletePerson(id: number): Promise<any> {
    const person = await this.getPersonById(id);
    await this.personRepository.delete(person);
    return new MessageDTO(`Se borro la tarea con el título ${person.name} `);
  }

}
