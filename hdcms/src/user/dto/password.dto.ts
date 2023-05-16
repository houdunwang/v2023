import { IsNotEmpty } from 'class-validator'
import { IsConfirmed } from 'src/validate/is-confirmed'

export class UserPasswordDto {
  @IsNotEmpty({ message: '密码不能为空' })
  @IsConfirmed({ message: '两次密码不一致' })
  password: string
}
