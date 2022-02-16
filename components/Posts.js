import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'Gerv',
    userImg: 'profilePic.jpg',
    img: 'profilePic.jpg',
    caption: 'this is dope',
  },
  {
    id: '1',
    username: 'Gerv',
    userImg: 'profilePic.jpg',
    img: 'profilePic.jpg',
    caption: 'this is dope',
  },
  {
    id: '12',
    username: 'Gerv',
    userImg: 'profilePic.jpg',
    img: 'profilePic.jpg',
    caption: 'this is dope',
  },
]
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
