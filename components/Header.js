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

function Header() {
  return (
    <div className="">
      <div className="flex max-w-6xl justify-between border-red-500">
        <div className="relative hidden w-24  cursor-pointer lg:inline-grid">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
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
      </div>
    </div>
  )
}

export default Header