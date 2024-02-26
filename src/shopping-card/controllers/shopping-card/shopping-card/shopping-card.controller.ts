import { CreateShoppingCardService } from '@ShoppingCard/application/shopping-card/create-shopping-card/create-shopping-card.service';
import { DeleteByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/delete-by-id-shopping-card/delete-by-id-shopping-card.service';
import { FindAllShoppingCardService } from '@ShoppingCard/application/shopping-card/find-all-shopping-card/find-all-shopping-card.service';
import { FindByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/find-by-id-shopping-card/find-by-id-shopping-card.service';
import { UpdateByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/update-by-id-shopping-card/update-by-id-shopping-card.service';
import { ShoppingCardDto } from '@ShoppingCard/controllers/dtos/shopping-card.dto';
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

@Controller('shopping-cards')
export class ShoppingCardController {
  constructor(
    private readonly createShoppingCardService: CreateShoppingCardService,
    private readonly findAllShoppingCardService: FindAllShoppingCardService,
    private readonly findByIdShoppingCardService: FindByIdShoppingCardService,
    private readonly updateByIdShoppingCardService: UpdateByIdShoppingCardService,
    private readonly deleteByIdShoppingCardService: DeleteByIdShoppingCardService,
  ) {}

  @Post()
  createShoppingCard(
    @Body() shoppingCard: ShoppingCardDto,
    @Res() response: Response,
  ) {
    this.createShoppingCardService
      .execute(shoppingCard)
      .then((result) => {
        response.status(201).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get()
  findAllShoppingCard(@Res() response: Response) {
    this.findAllShoppingCardService
      .execute()
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Get(':id')
  findByIdShoppingCard(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.findByIdShoppingCardService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Put(':id')
  updateByIdShoppingCard(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() shoppingCard: ShoppingCardDto,
    @Res() response: Response,
  ) {
    this.updateByIdShoppingCardService
      .execute(id, shoppingCard)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }

  @Delete(':id')
  deleteByIdShoppingCard(
    @Param('id', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    this.deleteByIdShoppingCardService
      .execute(id)
      .then((result) => {
        response.status(200).json(result);
      })
      .catch((error) => {
        response.status(400).json({ message: error.message });
      });
  }
}
