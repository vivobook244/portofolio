/* eslint-disable indent */
import { SET_PROFILE } from '../actions/types'

const initialState = {
  profile: {
    address: '',
    alumni: '',
    email: '',
    experience: '',
    id: '',
    image:
      'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
    name: '',
    phone_number: '',
    profession: '',
    type: '',
    voximplant_password: '',
    voximplant_userid: '',
    voximplant_username: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }

    default:
      return state
  }
}
