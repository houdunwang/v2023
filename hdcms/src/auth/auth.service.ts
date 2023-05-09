import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { hash, verify } from 'argon2'
import { PrismaService } from 'src/common/prisma.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return this.token(user)
  }

  private token(user: User) {
    return {
      token: this.jwt.sign({ id: user.id }),
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ name: dto.name }, { email: dto.name }, { mobile: dto.name }],
      },
    })

    if (!(await verify(user.password, dto.password))) {
      throw new BadRequestException()
    }

    return this.token(user)
  }
}
