import { comment } from './seed/comment'
import { soft } from './seed/soft'
import user from './seed/user'

async function run() {
  await user()
  await soft()
  await comment()
}

run()
