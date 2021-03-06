// import action types
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  GET_USER_PROFILE,
  REDIRECT_STATUS,
  CHANGE_PROFILE
} from '../actions/types'

// initial state
const initialState = {
  token: null,
  expiry: null,
  profile: null,
  redirect: '/'
}

// authentication reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.data.token,
        profile: action.payload.data.profile,
        expiry: action.payload.expiry
      }
    case LOGOUT:
      return { ...initialState }
    case GET_USER_PROFILE:
      return { ...state, profile: action.payload }
    case REDIRECT_STATUS:
      return { ...state, redirect: action.payload }
    case CHANGE_PROFILE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
