import { Comment, User } from '@prisma/client'
import { JsonResponse } from 'src/core/json.response'
import { UserResponse } from 'src/user/user.response'

export class CommentResponse extends JsonResponse<Comment & { user: User; replys: Comment[] }> {
  // protected hidden: (keyof User)[] = ['password']
  public make(): any {
    super.make()
    this.data.user = new UserResponse(this.data.user).make()
    // console.log(this.data.replys)
    if (this.data.replys) {
      this.data.replys = this.data.replys.map((reply) => new CommentResponse(reply as any).make())
    }
    // this.data.user = JsonResponse.handle(this.data.user, ['password', 'secret', 'mobile'])
    return this.data
  }
}
