import { User } from '@/db/models/User'
import dbConnect from '@/db'

export const signIn = async ({ email }) => {
  await dbConnect()
  return User.findOne({ email }).lean().exec()
}
