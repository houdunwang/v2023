import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/common/prisma.service'
import { UserPasswordDto } from './dto/password.dto'
import { hash } from 'argon2'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: { ...dto },
    })
  }

  async updatePassword(id: number, dto: UserPasswordDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        password: await hash(dto.password),
      },
    })
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
