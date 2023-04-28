import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import user from './seed/user'
const prisma = new PrismaClient()

async function run() {
  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        name: Random.cname(),
        password: Random.string(),
        App: {
          create: {
            title: Random.csentence(),
            content: Random.cparagraph(),
            preview: Random.image('300x300'),
          },
        },
      },
    })
  }
  await user()
}

run()
