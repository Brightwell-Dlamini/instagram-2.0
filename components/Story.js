import React from 'react'

function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-15 w-14 cursor-pointer rounded-full border-2 border-red-200 object-contain p-[1.5px] transition-transform duration-200 ease-out hover:scale-110"
        src={img}
        alt="profile pic"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
