import { PartialType } from '@nestjs/mapped-types';
import { CreatePetDto } from './create-pet.dto';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdatePetDto extends PartialType(CreatePetDto) {
  @IsString()
  @IsOptional()
  name? : string;

  @IsString()
  @IsOptional()
  species? : string;

  @IsDateString()
  @IsOptional()
  birthDay?: string;
}
