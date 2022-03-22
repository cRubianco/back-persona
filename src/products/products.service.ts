import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDTO } from 'src/model/dto/messageDTO';
import { ProductDTO } from 'src/model/dto/productoDTO';
import { ProductEntity } from 'src/model/entity/product.entity';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: ProductRepository
  ){}

  async getAllProducts(): Promise<ProductEntity[]> {
    const listProducts = await this.productRepository.find();
    if(!listProducts.length) {
      throw new NotFoundException({message: 'La lista de productos está vacia'});
    }
    return listProducts;
  }

  async getProductById(id: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException({message: `No se encontro ningún producto con el id ${product.id}.`});
    }
    return product;
  }

  async createProduct(productDTO: ProductDTO): Promise<any> {
    // verifico si existe
    // const exists = await this.getProductByName
    const product = this.productRepository.create(productDTO);
    await this.productRepository.save(product);
    return {message: 'se creo un producto'};
    throw new Error('Method not implemented.');
  }

  async updateProduct(id: number, dto: ProductDTO): Promise<any> {
    const product =  await this.getProductById(id);
    //Verifico si existe ese ID
    if(!product) {
      throw new BadRequestException({message: 'El producto no existe en la BD'})
    }
    dto.made
     ?  product.made = dto.made
     :  product.made = product.made; 
    dto.model
     ?  product.model = dto.model
     :  product.model = product.model; 
     dto.stock
     ?  product.stock = dto.stock
     :  product.stock = product.stock; 
     console.log('hola dto', dto);
     
    await this.productRepository.save(product);
    return new MessageDTO(`Se actualizo el producto con la marca ${product.made} `);
  }  

  async deleteProduct(id: number): Promise<any> {
    const product = await this.getProductById(id);
    await this.productRepository.delete(product);
    return new MessageDTO(`Se borro el producto marca ${product.made} `);
  }

}
