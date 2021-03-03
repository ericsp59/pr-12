import React from 'react';

const Friends = ({friends, totalCount}) => {


  return (
    <div>
      <h3>Friends</h3>

        {friends && friends.map(friend => { 
          return (
            <div key={friend.id}>
              <span>{friend.first_name} {friend.last_name}</span>
            </div>
          )
        })}
    </div>
  )
}


export default Friends