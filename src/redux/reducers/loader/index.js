import { SHOW_APP_LOADER, HIDE_APP_LOADER } from 'redux/actions/action_types'

const INITIAL_STATE = {
  loaderVisible: false,
}

const loader = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_APP_LOADER:
      return { ...state, loaderVisible: true }
    case HIDE_APP_LOADER:
      return { ...state, loaderVisible: false }
    default:
      return state
  }
}
export default loader;