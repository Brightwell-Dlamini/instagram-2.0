import { getProviders, signIn } from 'next-auth/react'
import React from 'react'
import Header from '../../components/Header'

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="-mt-40 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img src="../../login-logo.svg" alt="" className="h-20 w-20" />
        <p className="font-xs italic">
          This is not the real app, it is built for educational purposes.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="rounded-lg bg-blue-500 p-3 text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return { props: { providers } }
}

export default signin
