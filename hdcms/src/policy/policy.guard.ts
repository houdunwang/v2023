import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { POLICY_KEY } from './policy.decorator'
import { PrismaService } from 'src/common/prisma.service'
import { Request } from 'express'
import { User } from '@prisma/client'

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { policy, action } = this.reflector.get<any>(POLICY_KEY, context.getHandler())
    const controller = context.getClass().name.replace('Controller', '')
    const method = context.getHandler().name
    const request = context.switchToHttp().getRequest() as Request
    const user = request.user as User
    //超管放行
    if (user?.id == 1) return true
    const model = await this.prisma[controller].findUnique({
      where: { id: +(request.params.id || 0) },
    })
    const policyInstance = new policy(this.prisma, request)
    return policyInstance[action || method](model, user)
  }
}
