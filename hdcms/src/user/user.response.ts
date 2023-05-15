import { User } from '@prisma/client'
import { JsonResponse } from 'src/core/json.response'

export class UserResponse extends JsonResponse<User> {
  protected hidden: (keyof User)[] = ['password']
  public make(): User {
    super.make()
    this.data.avatar = this.data.avatar || '/public/assets/avatar.jpeg'
    return this.data
  }
}
