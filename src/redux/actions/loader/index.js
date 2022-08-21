import { SHOW_APP_LOADER, HIDE_APP_LOADER } from 'redux/actions/action_types'

export const showAppLoader = () => {
  return { type: SHOW_APP_LOADER }
}
export const hideAppLoader = () => {
  return { type: HIDE_APP_LOADER }
}
