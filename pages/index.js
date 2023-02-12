import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home () {
  const router = useRouter()
  return (
    <>
      <h1>home</h1>
      <button onClick={async () => {
        await signOut({ redirect: false })
        router.replace('/auth/sign-in')
      }}
      >
        salir
      </button>
    </>
  )
}
