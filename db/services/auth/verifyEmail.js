import { User } from '@/db/models/User'

export const verifyEmail = async ({ email }) => {
  return User.find({ email }).lean().exec()
}
