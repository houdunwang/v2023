import { Controller, Get, Ip } from '@nestjs/common'
import { CaptchaService } from './captcha.service'

@Controller('captcha')
export class CaptchaController {
  constructor(private readonly captchaService: CaptchaService) {}

  @Get()
  async create(@Ip() ip: any) {
    return this.captchaService.create(ip)
  }
}
