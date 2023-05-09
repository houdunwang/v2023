import { Body, Controller, Get, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { Admin } from './admin.decorator'
import { AuthService } from './auth.service'
import { CurrentUser } from './current-user.decorator'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Get('test')
  @Admin()
  test(@CurrentUser() user: User) {
    return user
  }
}
