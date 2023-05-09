import { UseGuards, applyDecorators } from '@nestjs/common'
import { AdminGuard } from './admin.guard.ts'
import { AuthGuard } from '@nestjs/passport'

export function Admin() {
  return applyDecorators(UseGuards(AuthGuard('jwt'), AdminGuard))
}
