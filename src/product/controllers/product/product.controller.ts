import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { ProductDto } from '../dtos/product.dto';
import { Response } from 'express';
import { CreateProductService } from '@Product/application/product/create-product/create-product.service';
import { FindAllProductsService } from '@Product/application/product/find-all-products/find-all-products.service';
import { FindByIdProductService } from '@Product/application/product/find-by-id-product/find-by-id-product.service';
import { UpdateByIdProductService } from '@Product/application/product/update-by-id-product/update-by-id-product.service';
import { DeleteByIdProductService } from '@Product/application/product/delete-by-id-product/delete-by-id-product.service';
import { SearchByNameOrDescriptionService } from '@Product/application/product/search-by-name-or-description/search-by-name-or-description.service';
import { ValidateParamTermPipe } from '@Product/infrastructure/pipe/validate-param-term/validate-param-term.pipe';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProductsService: FindAllProductsService,
    private readonly findByIdProductService: FindByIdProductService,
    private readonly updateByIdProductService: UpdateByIdProductService,
    private readonly deleteByIdProductService: DeleteByIdProductService,
    private readonly searchByNameOrDescriptionService: SearchByNameOrDescriptionService,
  ) {}
  @Post()
  createProduct(@Body() product: ProductDto, @Res() response: Response) {
    this.createProductService
      .execute(product)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
  @Get()
  findAllProducts(@Res() response: Response) {
    this.findAllProductsService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
  @Get(':id')
  findByIdProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdProductService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
  @Put(':id')
  updateByIdProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductDto,
    @Res() response: Response,
  ) {
    this.updateByIdProductService
      .execute(id, product)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
  @Delete(':id')
  deleteByIdProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdProductService
      .execute(id)
      .then(() => {
        response.status(204).json();
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get('search/:term')
  searchByNameOrDescription(
    @Param('term', new ValidateParamTermPipe()) term: string,
    @Res() response: Response,
  ) {
    this.searchByNameOrDescriptionService
      .execute(term)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
}
