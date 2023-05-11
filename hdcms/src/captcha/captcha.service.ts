import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { now } from 'lodash'
import md5 from 'md5'
import svgCaptcha from 'svg-captcha'

@Injectable()
export class CaptchaService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}
  async create(ip: string) {
    const key = md5('captcha' + now() + ip)
    const captcha = svgCaptcha.createMathExpr({
      mathMin: 0,
      mathMax: 9,
      color: true,
      height: 40,
      width: 120,
      noise: 3,
    })
    await this.cache.set(key, captcha.text, 1000 * 60 * 10)

    return {
      key,
      svg: captcha.data,
    }
  }

  async verify({ key, value }) {
    const cache = await this.cache.get(key)
    if (cache != value) {
      throw new BadRequestException('验证码输入错误')
    }
  }
}
