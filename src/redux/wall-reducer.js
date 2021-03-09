import {wallAPI} from '../api/api'
// import jsonp from 'jsonp'

const initialState = {
  'wallPostsCount': null,
  "wallPosts": null  
}


const wallReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_WALL_POST_SUCCESS:
      return {
        ...state,
        // wallPostsCount: action.wallData.count,
        wallPosts: action.wallPostItems,
      }
    case SET_WALL_POSTS_COUNT_SUCCESS:
      return {
        ...state,
        // wallPostsCount: action.wallData.count,
        wallPostsCount: action.wallPostsCount,
      }

    default: return state
  }
}

export const getWallPosts = () => (dispatch) => {
  wallAPI.getWallReq((err, data) => {
    // console.log(data.response)
    if (err) console.log(err)
    else {
      dispatch(setWallPostsCountSuccess(data.response.count))
      dispatch(setWallPostSuccess(data.response.items))
    }
  })
}


const setWallPostSuccess = (wallPostItems) => ({type: SET_WALL_POST_SUCCESS, wallPostItems})
const setWallPostsCountSuccess = (wallPostsCount) => ({type: SET_WALL_POSTS_COUNT_SUCCESS, wallPostsCount})

const SET_WALL_POST_SUCCESS = 'SET_WALL_POST_SUCCESS'
const SET_WALL_POSTS_COUNT_SUCCESS = 'SET_WALL_POSTS_COUNT_SUCCESS'

export default wallReducer