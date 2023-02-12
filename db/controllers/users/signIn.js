import { User } from '@/db/models/User'

export const signIn = async ({ email }) => {
  return User.find({ email }).lean().exec()
}
