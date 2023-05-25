import { Comment, User } from '@prisma/client'
import { JsonResponse } from 'src/core/json.response'
import { UserResponse } from 'src/user/user.response'

export class CommentResponse extends JsonResponse<Comment & { user: User }> {
  // protected hidden: (keyof User)[] = ['password']
  public make(): Comment & { user: User } {
    super.make()
    this.data.user = new UserResponse(this.data.user).make()
    // this.data.user = JsonResponse.handle(this.data.user, ['password', 'secret', 'mobile'])
    return this.data
  }
}
