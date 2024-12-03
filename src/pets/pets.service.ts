import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetsService {
  db: PrismaService;

  constructor(db : PrismaService){
    this.db = db;
  }
  create(createPetDto: CreatePetDto) {
    return this.db.pet.create({
      // data: {
      //   name: createPetDto.name,
      //   species: createPetDto.species,
      //   birthDay: createPetDto.birthDay
      // }
      data: createPetDto
    })
  }

  findAll() {
    return this.db.pet.findMany();
  }

  findOne(id: number) {
    return this.db.pet.findUnique({
      where: {
        id: id 
      }
    })
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return this.db.pet.update({
      data: updatePetDto,
      where: {
        id: id
      }
    })
  }

  remove(id: number) {
    return this.db.pet.delete({
      where: {
        id: id
      }
    })
  }
}
