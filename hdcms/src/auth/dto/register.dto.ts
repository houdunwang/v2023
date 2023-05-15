import { Allow, IsNotEmpty, Length, Matches } from 'class-validator'
import { IsConfirmed } from 'src/validate/is-confirmed'
import { IsNotExists } from 'src/validate/is-not-exists'

export class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3~20个字符' })
  @Matches(/^[a-z]+$/i, { message: '请输入英文字母' })
  @IsNotExists('user', ['name', 'email', 'mobile'], { message: '帐号已经存在' })
  name: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(5, 20, { message: '密码不能小于5位' })
  @IsConfirmed({ message: '两次密码不一致' })
  password: string

  @Allow()
  captcha: object
}
