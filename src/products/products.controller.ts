import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

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
  getProductById(@Res() res, @Param('id') id: number) {
    if (id >100) {
      return res.status(HttpStatus.NOT_FOUND).send('Nro muy grande');
    } else {
      return res.status(HttpStatus.OK).send(`Este es el producto  con el ${id}`);
    }
  }

  @Post()
  createProduct(@Body() body) {

    return `Metodo post ${body}`;
  } 

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.routeNotFound();
  }

}
