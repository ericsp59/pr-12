import React from 'react';
import s from './Post.module.css';

const Post = ({post}) => {
  const {date, text, copy_history = null} = post 
  const dateStr = new Date(date * 1000).toLocaleString()
  // console.log(post)
  
  return(
    <div className={s.post}>
      <p className={s.post__postText}>{text.length ? text : (copy_history ? copy_history[0].text : '')}</p>
      <p>{dateStr}</p>
      <div className={s.post__postAttachments}>
        {copy_history && copy_history[0].attachments && copy_history[0].attachments.map(a => {
          if (a.type === 'photo') {
            return (
              <div className={s.post__postAttachmens__photo} key={a.photo.id}>
                <img src={a.photo.photo_1280 || a.photo.photo_604 || a.photo.photo_130 || a.photo.photo_75} alt={'photo'}/>
              </div>
            )
          } else if(a.type === 'audio') {
            return (
              <div className={s.post__postAttachmens__audio} key={a.audio.id}>
                <p>{a.audio.artist} - {a.audio.title}</p>
                <audio controls>
                  <source src={a.audio.url} type="audio/mpeg"/> 
                </audio>
              </div>
            )
          }

        })}
      </div>
    </div>
  )
}

export default Post