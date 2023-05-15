import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidatePipeCustom } from './pipe/validate-pipe-custom'
import { NestExpressApplication } from '@nestjs/platform-express'
import { HttpStatus } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix('api')
  app.useStaticAssets('public', { prefix: '/public' })
  app.useGlobalPipes(new ValidatePipeCustom({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }))
  await app.listen(3000)
}
bootstrap()
