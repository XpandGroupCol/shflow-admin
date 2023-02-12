import { getServerSession } from 'next-auth/next'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
const SignIn = () => {
  const { data } = useSession()
  const router = useRouter()
  return (
    <>
      <h1>SignIn</h1>
      <button onClick={async () => {
        const { error } = await signIn('credentials', { email: 'diegocontreras1219@gmail.com', password: 'asf', redirect: false })
        if (!error) {
          return router.replace('/')
        }
      }}
      >
        login
      </button>
      <pre>
        {JSON.stringify(data, 2, null)}
      </pre>
    </>
  )
}

export const getServerSideProps = async ({ req, query, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const { q = '/' } = query

  if (session) {
    return {
      redirect: {
        destination: q.toString(),
        permanent: false
      }
    }
  }

  return {
    props: { }
  }
}

export default SignIn
