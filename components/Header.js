import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import logosm from '../public/logo-sm-screen.png'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signOut, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtoms'

function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)

  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex  max-w-6xl justify-between xl:mx-auto ">
        <div
          className="relative hidden w-24  cursor-pointer lg:inline-grid"
          onClick={() => router.push('/')}
        >
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <Image src={logosm} layout="fill" objectFit="contain" />
        </div>
        {/* Middle - Search Input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md  p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-none focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Header */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" onClick={() => router.push('/')} />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="navButton relative">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>

              <PlusCircleIcon
                className="navButton"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
