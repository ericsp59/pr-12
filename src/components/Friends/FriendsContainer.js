import React from 'react';
import Friends from './Friends'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {getFriendsIds} from '../../redux/friends-reducer'

const FriendsContainer = (props) => {

  props.getFriendsIds()
  return (
    <Friends/>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.items
  }
}

export default compose(
  connect(mapStateToProps, {getFriendsIds})
)(FriendsContainer)
