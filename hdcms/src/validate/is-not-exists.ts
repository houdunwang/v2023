import { PrismaClient, User } from '@prisma/client'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

//表字段是否唯一
export function IsNotExists(table: string, fields: string[], validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExists',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient({ log: ['query'] })
          const res = await prisma[table].findFirst({
            where: {
              OR: fields.map((field) => ({ [field]: value })),
            },
          })
          return !Boolean(res)
        },
      },
    })
  }
}
