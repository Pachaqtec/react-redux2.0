import { combineReducers } from 'redux'
import { UPDATE_NICK_NAME } from '../actions/nickname'

const update = (stateDefault = '', action) => {
  // console.log('action', action)
  switch (action.type) {
    case UPDATE_NICK_NAME:
      return action.payload
    default:
      return stateDefault
  }
}

export default combineReducers({
  update
})
