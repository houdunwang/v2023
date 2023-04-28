import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'houdunren',
    city: 'beijing',
    copyright: '2023',
  }
})
