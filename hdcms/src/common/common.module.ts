import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma.service'
import config from '../config'
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService, PrismaService],
  exports: [ConfigService, PrismaService],
})
export class CommonModule {}
