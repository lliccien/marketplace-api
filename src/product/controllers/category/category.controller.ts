import { CreateCategoryService } from '@Product/application/category/create-category/create-category.service';
import { DeleteByIdCategoryService } from '@Product/application/category/delete-by-id-category/delete-by-id-category.service';
import { FindAllCategoryService } from '@Product/application/category/find-all-category/find-all-category.service';
import { FindByIdCategoryService } from '@Product/application/category/find-by-id-category/find-by-id-category.service';
import { UpdateByIdCategoryService } from '@Product/application/category/update-by-id-category/update-by-id-category.service';
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
import { CategoryDto } from '../dtos/category.dto';
import { Response } from 'express';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly createCategoryService: CreateCategoryService,
    private readonly findAllCategoryService: FindAllCategoryService,
    private readonly findByIdCategoryService: FindByIdCategoryService,
    private readonly updateByIdCategoryService: UpdateByIdCategoryService,
    private readonly deleteByIdCategoryService: DeleteByIdCategoryService,
  ) {}

  @Post()
  createCategory(@Body() category: CategoryDto, @Res() response: Response) {
    this.createCategoryService
      .execute(category)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  }

  @Get()
  findAllCategory(@Res() response: Response) {
    this.findAllCategoryService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  }

  @Get(':id')
  findByIdCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdCategoryService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  }

  @Put(':id')
  updateByIdCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() category: CategoryDto,
    @Res() response: Response,
  ) {
    this.updateByIdCategoryService
      .execute(id, category)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  }

  @Delete(':id')
  deleteByIdCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdCategoryService
      .execute(id)
      .then(() => {
        response.status(204).json();
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  }
}
