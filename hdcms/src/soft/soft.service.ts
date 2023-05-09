import { Injectable } from '@nestjs/common';
import { CreateSoftDto } from './dto/create-soft.dto';
import { UpdateSoftDto } from './dto/update-soft.dto';

@Injectable()
export class SoftService {
  create(createSoftDto: CreateSoftDto) {
    return 'This action adds a new soft';
  }

  findAll() {
    return `This action returns all soft`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soft`;
  }

  update(id: number, updateSoftDto: UpdateSoftDto) {
    return `This action updates a #${id} soft`;
  }

  remove(id: number) {
    return `This action removes a #${id} soft`;
  }
}
