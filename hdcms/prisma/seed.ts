import { soft } from './seed/soft'
import user from './seed/user'

async function run() {
  await user()
  await soft()
}

run()
