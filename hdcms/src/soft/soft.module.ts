import { Module } from '@nestjs/common';
import { SoftService } from './soft.service';
import { SoftController } from './soft.controller';

@Module({
  controllers: [SoftController],
  providers: [SoftService]
})
export class SoftModule {}
