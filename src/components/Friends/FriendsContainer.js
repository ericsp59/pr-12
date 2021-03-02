import React, {useEffect} from 'react';
import Friends from './Friends'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getFriendsIds} from '../../redux/friends-reducer'

const FriendsContainer = (props) => {
  // console.log(props)


  useEffect(props.getFriendsIds, [props.t])

  return (
    <Friends friends={props.friends}/>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.items,
    t: 1

  }
}

export default compose(
  connect(mapStateToProps, {getFriendsIds})
)(FriendsContainer)
