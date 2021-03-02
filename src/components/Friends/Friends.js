import React from 'react';

const Friends = (props) => {
  return (
    <div>
      <h3>Friends</h3>
        <button onClick={props.getFriendsIds}>props.getFriendsIds</button>
    </div>
  )
}

export default Friends