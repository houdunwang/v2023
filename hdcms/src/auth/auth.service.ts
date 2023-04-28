import { BadRequestException, Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { PrismaService } from 'src/common/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { validateFail } from 'src/helper'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return user
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ name: dto.name }, { email: dto.name }, { mobile: dto.name }],
      },
    })

    return user
  }
}
