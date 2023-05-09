import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@prisma/client'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from 'src/common/config.service'
import { PrismaService } from 'src/common/prisma.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService, private prisma: PrismaService) {
    super({
      //解析用户提交的Bearer Token header数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //加密码的 secret
      secretOrKey: configService.get('app_key'),
    })
  }

  //验证通过后结果用户资料
  async validate({ id }): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
