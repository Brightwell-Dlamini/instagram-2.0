import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="mr-2 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 cursor-pointer font-bold">{username} </p>
        <DotsHorizontalIcon className="btn" />
      </div>
      {/* img */}
      <img src={img} alt="" className="w-full object-cover" />
      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 pb-2">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* likes */}
      <p className="px-5 font-bold">2 Likes</p>
      {/* caption */}
      <div className="flex truncate px-5">
        <p className="pr-2 font-bold">{username}:</p>
        <p>{caption} </p>
      </div>

      {/* comments */}
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="btn" />
        <input
          type="text"
          name=""
          id=""
          className="flex-1 rounded-md border-none bg-gray-100 outline-none focus:ring-0"
          placeholder="Add a comment"
        />
        <button className="ml-4 font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
