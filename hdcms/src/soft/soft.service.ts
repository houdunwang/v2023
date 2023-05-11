import { Inject, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/common/prisma.service'
import { CreateSoftDto } from './dto/create-soft.dto'
import { UpdateSoftDto } from './dto/update-soft.dto'
import { REQUEST } from '@nestjs/core'

@Injectable()
export class SoftService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateSoftDto, user: User) {
    return this.prisma.soft.create({
      data,
    })
  }

  async findAll(page = 1) {
    const row = 10
    const data = await this.prisma.soft.findMany({
      skip: (page - 1) * row,
      take: row,
    })

    return {
      meta: { page, row, total: await this.prisma.soft.count() },
      data,
    }
  }

  findOne(id: number) {
    return this.prisma.soft.findFirst({ where: { id } })
  }

  update(id: number, dto: UpdateSoftDto) {
    return this.prisma.soft.update({
      where: { id },
      data: { ...dto },
    })
  }

  remove(id: number) {
    return this.prisma.soft.deleteMany({ where: { id } })
  }
}
