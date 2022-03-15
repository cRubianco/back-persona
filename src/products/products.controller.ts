import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get('error404')
  @HttpCode(HttpStatus.NOT_FOUND)
  routeNotFound() {
    return 'No se encontro la ruta especificada'
  }

  @Get()
  getAllProducts(): string {
    return 'allproducts';
  }

  @Get(':id')
  getProductById(@Res() resizeBy, @Param('id') id: number) {
    if (id >100) {
      return 'Nro muy grande';
    } else {
      return `Este es el producto  con el ${id}`
    }
  }

  @Post()
  createProduct(@Body() body) {

    return `Metodo post ${body}`;
  } 

}
