import { Allow, IsNotEmpty, Length } from 'class-validator'

export class CreateCommentDto {
  @IsNotEmpty({ message: '评论内容不能为空' })
  @Length(10, 1000, { message: '评论内容不能少于10个字' })
  content: string

  @Allow()
  commentId?: number
}
