import { PartialType } from '@nestjs/mapped-types'
import { RegisterDto } from './register.dto'
import { IsNotEmpty, Length } from 'class-validator'
import { IsExists } from 'src/validate/is-exists'

export class LoginDto extends PartialType(RegisterDto) {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3~20个字符' })
  @IsExists('user', ['name', 'email', 'mobile'], { message: '用户不存在' })
  name: string
}
