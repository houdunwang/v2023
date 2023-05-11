import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CommonModule } from './common/common.module'
import { AuthModule } from './auth/auth.module'
import { SoftModule } from './soft/soft.module'
import { UploadModule } from './upload/upload.module'
import { UserModule } from './user/user.module';
@Module({
  imports: [CommonModule, AuthModule, SoftModule, UploadModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
