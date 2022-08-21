import {
  USER_INITIATE,
  SIGN_IN,
} from 'redux/actions/action_types'

const INITIAL_STATE = {
  userData: null,
  createPassword: null,
  changePassword: null,
  getInvestors: null,
}
const auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_INITIATE:
      return INITIAL_STATE
    case SIGN_IN:
      return { ...state, userData: payload }
    default:
      return state
  }
}
export default auth
