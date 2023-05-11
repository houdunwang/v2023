import { IsNotEmpty } from 'class-validator'

export class CreateSoftDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  preview: string
}
