import { combineReducers } from 'redux'
import user from './user'
import company from './company'

export default combineReducers({
  company,
  user
})