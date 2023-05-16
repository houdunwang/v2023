import { Allow } from 'class-validator'

export class CreateUserDto {
  @Allow()
  avatar: string
}
