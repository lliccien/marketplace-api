import { CreateShoppingCartDetailService } from '@ShoppingCart/application/shopping-cart-detail/create-shopping-cart-detail/create-shopping-cart-detail.service';
import { DeleteByIdShoppingCartDetailService } from '@ShoppingCart/application/shopping-cart-detail/delete-by-id-shopping-cart-detail/delete-by-id-shopping-cart-detail.service';
import { FindAllShoppingCartDetailService } from '@ShoppingCart/application/shopping-cart-detail/find-all-shopping-cart-detail/find-all-shopping-cart-detail.service';
import { FindByIdShoppingCartDetailService } from '@ShoppingCart/application/shopping-cart-detail/find-by-id-shopping-cart-detail/find-by-id-shopping-cart-detail.service';
import { UpdateByIdShoppingCartDetailService } from '@ShoppingCart/application/shopping-cart-detail/update-by-id-shopping-cart-detail/update-by-id-shopping-cart-detail.service';
import { ShoppingCartDetailDto } from '@ShoppingCart/controllers/dtos/shopping-cart-detail.dto';
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

@Controller('shopping-cart-details')
export class ShoppingCartDetailController {
  constructor(
    private readonly createShoppingCartDetailService: CreateShoppingCartDetailService,
    private readonly findAllShoppingCartDetailService: FindAllShoppingCartDetailService,
    private readonly findByIdShoppingCartDetailService: FindByIdShoppingCartDetailService,
    private readonly updateByIdShoppingCartDetailService: UpdateByIdShoppingCartDetailService,
    private readonly deleteByIdShoppingCartDetailService: DeleteByIdShoppingCartDetailService,
  ) {}

  @Post()
  createShoppingCartDetail(
    @Body() shoppingCartDetail: ShoppingCartDetailDto,
    @Res() response: Response,
  ) {
    this.createShoppingCartDetailService
      .execute(shoppingCartDetail)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get()
  findAllShoppingCartDetail(@Res() response: Response) {
    this.findAllShoppingCartDetailService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get(':id')
  findByIdShoppingCartDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdShoppingCartDetailService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Put(':id')
  updateByIdShoppingCartDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateShoppingCartDetail: ShoppingCartDetailDto,
    @Res() response: Response,
  ) {
    this.updateByIdShoppingCartDetailService
      .execute(id, updateShoppingCartDetail)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Delete(':id')
  deleteByIdShoppingCartDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdShoppingCartDetailService
      .execute(id)
      .then(() => {
        response.status(204).send();
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
}
