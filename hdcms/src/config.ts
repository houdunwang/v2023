import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'houdunren',
    app_key: 'houdunren',
  }
})
