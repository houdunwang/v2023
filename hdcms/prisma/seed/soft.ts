import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
const prisma = new PrismaClient()

export const soft = async () => {
  for (let i = 0; i < 30; i++) {
    await prisma.soft.create({
      data: {
        title: Random.ctitle(),
        content: Random.cparagraph(),
        preview: Random.image('800x450'),
        description: Random.cparagraph(),
      },
    })
  }
}
