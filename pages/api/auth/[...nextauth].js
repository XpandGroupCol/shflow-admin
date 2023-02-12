import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import signInCredentials from '@/pages/api/authentication/signIn'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        try {
          const { email, password } = credentials
          const user = await signInCredentials({ email, password })
          if (user) {
            return user
          } else {
            return null
          }
        } catch (e) {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-in',
    error: '/auth/sign-in'
  }
}
export default NextAuth(authOptions)
