import {friendsAPI} from '../api/api'
// import jsonp from 'jsonp'

const initialState = {
  "totalCount": null,
  "count": 5000,
  "offset": 1,
  "items": null  
}


const friendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TOTAL_COUNT_FRIENDS:
      return {
        ...state,
        totalCount: action.totalCount
      }

    case SET_FRIENDS_SUCCESS: 
      // console.log(action)
      return {
        ...state,
        items: action.items
      }

    default: return state
  }
}



export const getFriends = (count, offset) => (dispatch) => {
  friendsAPI.getFriendsReq(count, offset, (err, data) => {
    if (err) console.log(err)
    else {
      // console.log(data.response.items.length)
      dispatch(setTotalCountFriends(data.response.items.length))
      dispatch(setUserAccess(data.response.items))
    }
  })
}


const setUserAccess = (items) => ({type: SET_FRIENDS_SUCCESS, items})
const setTotalCountFriends = (totalCount) => ({type: SET_TOTAL_COUNT_FRIENDS, totalCount})

const SET_FRIENDS_SUCCESS = "SET_FRIENDS_SUCCESS"
const SET_TOTAL_COUNT_FRIENDS = "SET_TOTAL_COUNT_FRIENDS"

export default friendsReducer