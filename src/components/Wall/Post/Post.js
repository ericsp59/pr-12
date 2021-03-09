import React from 'react';
import s from './Post.module.css';

const Post = ({post}) => {
  const {date, text, copy_history} = post
  const dateStr = new Date(date * 1000).toLocaleString()

  return(
    <div className={s.postWrapper}>
      <p>{text.length ? text : (copy_history ? copy_history[0].text : '')}</p>
      <p>{dateStr}</p>
    </div>
  )
}

export default Post