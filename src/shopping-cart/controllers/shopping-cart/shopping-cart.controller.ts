import { CreateShoppingCartService } from '@ShoppingCart/application/shopping-cart/create-shopping-cart/create-shopping-cart.service';
import { DeleteByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/delete-by-id-shopping-cart/delete-by-id-shopping-cart.service';
import { FindAllShoppingCartService } from '@ShoppingCart/application/shopping-cart/find-all-shopping-cart/find-all-shopping-cart.service';
import { FindByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/find-by-id-shopping-cart/find-by-id-shopping-cart.service';
import { UpdateByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/update-by-id-shopping-cart/update-by-id-shopping-cart.service';
import { ShoppingCartDto } from '@ShoppingCart/controllers/dtos/shopping-cart.dto';
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

@Controller('shopping-carts')
export class ShoppingCartController {
  constructor(
    private readonly createShoppingCartService: CreateShoppingCartService,
    private readonly findAllShoppingCartService: FindAllShoppingCartService,
    private readonly findByIdShoppingCartService: FindByIdShoppingCartService,
    private readonly updateByIdShoppingCartService: UpdateByIdShoppingCartService,
    private readonly deleteByIdShoppingCartService: DeleteByIdShoppingCartService,
  ) {}

  @Post()
  createShoppingCart(
    @Body() shoppingCart: ShoppingCartDto,
    @Res() response: Response,
  ) {
    this.createShoppingCartService
      .execute(shoppingCart)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get()
  findAllShoppingCart(@Res() response: Response) {
    this.findAllShoppingCartService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get(':id')
  findByIdShoppingCart(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdShoppingCartService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Put(':id')
  updateByIdShoppingCart(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() shoppingCart: ShoppingCartDto,
    @Res() response: Response,
  ) {
    this.updateByIdShoppingCartService
      .execute(id, shoppingCart)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Delete(':id')
  deleteByIdShoppingCart(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdShoppingCartService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
}
