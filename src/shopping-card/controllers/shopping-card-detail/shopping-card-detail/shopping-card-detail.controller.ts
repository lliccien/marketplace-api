import { CreateShoppingCardDetailService } from '@ShoppingCard/application/shopping-card-detail/create-shopping-card-detail/create-shopping-card-detail.service';
import { DeleteByIdShoppingCardDetailService } from '@ShoppingCard/application/shopping-card-detail/delete-by-id-shopping-card-detail/delete-by-id-shopping-card-detail.service';
import { FindAllShoppingCardDetailService } from '@ShoppingCard/application/shopping-card-detail/find-all-shopping-card-detail/find-all-shopping-card-detail.service';
import { FindByIdShoppingCardDetailService } from '@ShoppingCard/application/shopping-card-detail/find-by-id-shopping-card-detail/find-by-id-shopping-card-detail.service';
import { UpdateByIdShoppingCardDetailService } from '@ShoppingCard/application/shopping-card-detail/update-by-id-shopping-card-detail/update-by-id-shopping-card-detail.service';
import { ShoppingCardDetailDto } from '@ShoppingCard/controllers/dtos/shopping-card-detail.dto';
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
import { Response } from 'express';

@Controller('shopping-card-details')
export class ShoppingCardDetailController {
  constructor(
    private readonly createShoppingCardDetailService: CreateShoppingCardDetailService,
    private readonly findAllShoppingCardDetailService: FindAllShoppingCardDetailService,
    private readonly findByIdShoppingCardDetailService: FindByIdShoppingCardDetailService,
    private readonly updateByIdShoppingCardDetailService: UpdateByIdShoppingCardDetailService,
    private readonly deleteByIdShoppingCardDetailService: DeleteByIdShoppingCardDetailService,
  ) {}

  @Post()
  createShoppingCardDetail(
    @Body() shoppingCardDetail: ShoppingCardDetailDto,
    @Res() response: Response,
  ) {
    this.createShoppingCardDetailService
      .execute(shoppingCardDetail)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get()
  findAllShoppingCardDetail(@Res() response: Response) {
    this.findAllShoppingCardDetailService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get(':id')
  findByIdShoppingCardDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdShoppingCardDetailService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Put(':id')
  updateByIdShoppingCardDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateShoppingCardDetail: ShoppingCardDetailDto,
    @Res() response: Response,
  ) {
    this.updateByIdShoppingCardDetailService
      .execute(id, updateShoppingCardDetail)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Delete(':id')
  deleteByIdShoppingCardDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdShoppingCardDetailService
      .execute(id)
      .then(() => {
        response.status(204).send();
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
}
