import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Wall from './Wall';
import {getWallPosts, addWallPost} from '../../redux/wall-reducer';

const WallContainer = ({addWallPost, getWallPosts, wallPostsCount, wallPosts, }) => {

  useEffect(() => getWallPosts(), [])

  return (
    <Wall addWallPost={addWallPost} wallPosts={wallPosts} wallPostsCount={wallPostsCount} />
  )
}

const mapStateToProps = (state) => {
  return {
    wallPosts: state.wallPage.wallPosts,
    wallPostsCount: state.wallPage.wallPostsCount,

  }
}

export default compose(
  connect(mapStateToProps, {getWallPosts, addWallPost})
)(WallContainer)