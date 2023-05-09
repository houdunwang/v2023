import { UseGuards, applyDecorators } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export function Auth() {
  return applyDecorators(UseGuards(AuthGuard('jwt')))
}
