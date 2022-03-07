import { EntityRepository, Repository } from "typeorm";
import { PersonEntity } from "./entity/person.entity";

@EntityRepository(PersonEntity)
export class PersonRepository extends Repository<PersonEntity>{}