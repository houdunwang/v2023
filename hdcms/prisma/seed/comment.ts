import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'

const prisma = new PrismaClient()
export const comment = async () => {
  for (let i = 1; i < 30; i++) {
    const res = await prisma.comment.create({
      data: {
        content: Random.csentence(),
        soft: { connect: { id: i } },
        user: { connect: { id: i } },
      },
    })
    await prisma.comment.create({
      data: {
        content: Random.csentence(),
        soft: { connect: { id: i } },
        user: { connect: { id: i } },
        reply: { connect: { id: res.id } },
      },
    })
  }
}
