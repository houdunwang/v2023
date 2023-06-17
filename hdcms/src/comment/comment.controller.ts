import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/auth.decorator'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { PrismaService } from 'src/common/prisma.service'
import { Policy } from 'src/policy/policy.decorator'
import { PolicyGuard } from 'src/policy/policy.guard'
import { CommentPolicy } from './comment.policy'
import { CommentResponse } from './comment.response'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { Throttle } from '@nestjs/throttler'

@Controller('comment/:sid')
export class CommentController {
  constructor(private readonly commentService: CommentService, private prisma: PrismaService) {}

  @Post()
  @Auth()
  @Throttle(111, 20)
  async create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() user: User, @Param('sid') sid: number) {
    const comment = await this.commentService.create(createCommentDto, user, sid)
    return new CommentResponse(comment).make()
  }

  @Get()
  async findAll(@Param('sid') sid: number) {
    const comments = await this.commentService.findAll(+sid)
    return comments.map((comment) => {
      return new CommentResponse(comment).make()
    })
  }

  @Delete(':id')
  //守卫：执行验证
  @UseGuards(PolicyGuard)
  //设置元数据，提供给守卫
  @Policy(CommentPolicy)
  //获取身份、登录
  @Auth()
  async remove(@Param('id') id: string, @CurrentUser() user: User) {
    return this.commentService.remove(+id)
  }
}
