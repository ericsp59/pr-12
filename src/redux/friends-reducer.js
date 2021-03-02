import {friendsAPI} from '../api/api'
// import jsonp from 'jsonp'

const initialState = {
  "count": 1471,
  "items": null  
}


const friendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USERS_ACCESS: 
      return {
        ...state,
        items: action.items
      }

    default: return state
  }
}



export const getFriendsIds = () => async (dispatch) => {
  await friendsAPI.getFriendsIds( (err, data) => {
    if (err) console.log(err)
    else {
      console.log(data.response.items)
    }
  })
  
}

const setUserAccess = (items) => ({type: SET_USERS_ACCESS, items})

const SET_USERS_ACCESS = "SET_USERS_ACCESS"

export default friendsReducer