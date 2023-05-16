import { IsNotEmpty } from 'class-validator'

export class CreateSoftDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  preview: string
  @IsNotEmpty({ message: '软件简介不能为空' })
  description: string
}
