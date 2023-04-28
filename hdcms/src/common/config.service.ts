import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import config from '../config'

@Injectable()
export class ConfigService {
  constructor(@Inject(config.KEY) private data: ConfigType<typeof config>) {}

  get(key: keyof ConfigType<typeof config>) {
    return this.data[key]
  }
}
