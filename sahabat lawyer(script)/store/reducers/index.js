import { combineReducers } from 'redux'
import profileReducers from './profileReducer'
import registerReducers from './registerReducer'

export default combineReducers({
  profile: profileReducers,
  register: registerReducers
})
