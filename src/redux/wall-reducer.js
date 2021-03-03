import {wallAPI} from '../api/api'
// import jsonp from 'jsonp'

const initialState = {
  'wallPostsCount': null,
  "wallPosts": null  
}


const wallReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_WALL_POST_SUCCESS:
      console.log(action)
      return {
        ...state,
        wallPostsCount: action.wallData.count,
        wallPosts: action.wallData.items,

      }

    default: return state
  }
}

export const getWallPosts = () => (dispatch) => {
  wallAPI.getWallReq((err, data) => {
    if (err) console.log(err)
    else {
      console.log(data.response.items)
      dispatch(setWallPostSuccess(data.response))
    }
  })
}


const setWallPostSuccess = (wallData) => ({type: SET_WALL_POST_SUCCESS, wallData})

const SET_WALL_POST_SUCCESS = 'SET_WALL_POST_SUCCESS'

export default wallReducer