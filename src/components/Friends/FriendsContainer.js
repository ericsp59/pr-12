import React, {useEffect} from 'react';
import Friends from './Friends'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getFriends} from '../../redux/friends-reducer'

const FriendsContainer = ({count, offset, getFriends, friends, totalCount}) => {


  useEffect(() => getFriends(count, offset), [totalCount])

  return (
    <Friends friends={friends} totalCount={totalCount}/>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.items,
    count: state.friendsPage.count,
    totalCount: state.friendsPage.totalCount,
    offset: state.friendsPage.offset
    // t: 1

  }
}

export default compose(
  connect(mapStateToProps, {getFriends})
)(FriendsContainer)
