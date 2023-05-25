import { Comment, User } from '@prisma/client'
import { Request } from 'express'
import { PrismaService } from 'src/common/prisma.service'
import { IPolicy } from 'src/policy/policy.decorator'

export class CommentPolicy implements IPolicy {
  constructor(private prisma: PrismaService, private request: Request) {}

  remove(model: Comment, user: User) {
    return model.userId == user.id
  }
}
