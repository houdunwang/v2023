import { Global, Module } from '@nestjs/common'
import { CaptchaService } from './captcha.service'
import { CaptchaController } from './captcha.controller'

@Global()
@Module({
  controllers: [CaptchaController],
  providers: [CaptchaService],
  exports: [CaptchaService],
})
export class CaptchaModule {}
