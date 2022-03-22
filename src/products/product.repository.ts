import { ProductEntity } from "src/model/entity/product.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity>{}
