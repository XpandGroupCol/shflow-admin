import { signIn } from '@/db/services/auth/signIn'

export default async function signInCredentials ({ email, password }) {
  try {
    const user = await signIn({ email })
    return user
  } catch (e) {
    return null
  }
}
