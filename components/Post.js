import React, { useEffect, useState } from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),

    [db]
  )

  const sendComment = async (e) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

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
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 pb-2">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* likes */}
      <p className="px-5 font-bold">2 Likes</p>
      {/* caption */}
      <div className="flex truncate px-5">
        <p className="pr-2 font-bold">{username}:</p>
        <p>{caption} </p>
      </div>

      {/* comments */}

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black ">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2 ">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImg}
                alt="userImg"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}: </span>
                {comment.data().comment}
              </p>
              <Moment className="pr-5 text-xs" fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="btn" />
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            value={comment}
            className="flex-1 rounded-md border-none bg-gray-100 outline-none focus:ring-0"
            placeholder="Add a comment"
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            className="ml-4 font-semibold text-blue-400"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
