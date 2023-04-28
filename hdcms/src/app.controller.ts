import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigService } from './common/config.service'

@Controller()
export class AppController {
  constructor(private config: ConfigService) {}

  @Get()
  getHello(): any {
    // return this.config.get('city')
  }
}
