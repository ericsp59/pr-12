import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Wall from './Wall';
import {getWallPosts} from '../../redux/wall-reducer';

const WallContainer = ({getWallPosts,postsCount}) => {

  useEffect(() => getWallPosts(), [postsCount])

  return (
    <Wall/>
  )
}

const mapStateToProps = (state) => {
  return {
    wallPosts: state.wallPage.items,
    WallPostsCount: state.wallPage.count
  }
}

export default compose(
  connect(mapStateToProps, {getWallPosts})
)(WallContainer)