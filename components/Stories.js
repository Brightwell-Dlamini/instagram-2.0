import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Story from './Story'
import { useSession } from 'next-auth/react'
function Stories() {
  const { data: session } = useSession()
  const [stories, setStories] = useState([])

  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setStories(stories)
    return () => {}
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border-2 border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {stories.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
