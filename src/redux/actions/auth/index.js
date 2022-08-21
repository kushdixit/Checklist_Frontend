import axioPath from 'api/axioPath'
import {
  SIGN_IN,
} from 'redux/actions/action_types';

export const auth = (data) => (dispatch) => {
  return axioPath
    .post('/auth/login', data)
    .then((response) => {
      dispatch({ type: SIGN_IN, payload: response.data })
      return { error: false, data: response.data }
    })
    .catch((ex) => {
      if (typeof ex == 'string') {
        return { ex: { message: ex } }
      }
      return { error: true, data: ex }
    })
}
