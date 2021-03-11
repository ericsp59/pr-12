import React, {useEffect, useState} from 'react';
import Post from './Post/Post'
import WallPostForm from './WallPostForm/WallPostForm';

const Wall = ({addWallPost, wallPosts, wallPostsCount, wallAddPostMessage}) => {

  const [isWallPostFormShow, setWallPostFormShow] = useState(false);

  return (
    <div>
      <h3>Wall</h3>
      {!isWallPostFormShow ? 
        <button onClick={() => setWallPostFormShow(true)}>Добавить запись</button> :
        <button onClick={() => setWallPostFormShow(false)}>Закрыть</button>
      }
      
      {isWallPostFormShow && 
      <WallPostForm
        initialValues={{'message': ''}}
        onSubmit={() => addWallPost('123')}
      />
      }

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