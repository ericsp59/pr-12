import React from 'react';
import Post from './Post/Post'

const Wall = ({wallPosts, wallPostsCount}) => {

  console.log(wallPosts)

  return (
    <div>
      <h3>Wall</h3>
      <button>Добавить запись</button>
      {wallPosts && wallPosts.map(post => {
        return <Post
                  key={post.id}
                  post={post}

                />
      })}

    </div>
  )
}

export default Wall