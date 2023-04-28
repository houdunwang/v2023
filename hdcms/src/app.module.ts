import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CommonModule } from './common/common.module'
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [CommonModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
