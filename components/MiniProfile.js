import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        src="logo-sm-screen.png"
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Gerv</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button
        className="cursor-pointer text-sm font-semibold text-blue-400
      "
      >
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
