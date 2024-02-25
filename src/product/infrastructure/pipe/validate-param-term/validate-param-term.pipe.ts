import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateParamTermPipe implements PipeTransform {
  transform(value: string) {
    if (!value || value.trim() === '') {
      throw new BadRequestException('term is required.');
    }
    return value;
  }
}
