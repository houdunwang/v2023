import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'
import { Random } from 'mockjs'

const prisma = new PrismaClient()

export default async () => {
  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        name: Random.cname(),
        password: Random.string(),
        nickname: Random.cname(),
      },
    })
  }

  await prisma.user.update({
    where: { id: 1 },
    data: {
      name: 'admin',
      password: await hash('admin888'),
    },
  })
}
