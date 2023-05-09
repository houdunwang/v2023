import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CommonModule } from './common/common.module'
import { AuthModule } from './auth/auth.module'
import { SoftModule } from './soft/soft.module'
@Module({
  imports: [CommonModule, AuthModule, SoftModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
