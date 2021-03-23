/** @format */

import cookiesService from 'utils/services/cookies'
import jwtDecode from 'jwt-decode'
import { authServices } from 'services/index'
import { authTypes } from 'constants/index'

export const LoginActions = (data) => (dispatch) => {
  dispatch({
    type: authTypes.LOGIN_REQUEST,
  })

  return authServices
    .LoginService(data)
    .then((res) => {
      cookiesService.setToken(res.data)

      dispatch({
        type: authTypes.LOGIN_SUCCESS,
        payload: {
          auth_token: res.data,
          data,
        },
      })

      return { error: false, data: res.data }
    })
    .catch((error) => {
      dispatch({
        type: authTypes.LOGIN_FAILURE,
      })

      const errorHandler = error
        ? error.response
          ? error.response.data
          : error.response
        : 'Something went wrong!'

      return { error: true, data: errorHandler }
    })
}
export const ProfileActions = (id) => (dispatch) => {
  dispatch({
  type: authTypes.PROFILE_REQUEST,
  })
  return authServices
  .ProfileService(id)
  .then((res) => {
      dispatch({
        type: authTypes.PROFILE_SUCCESS,

      })
    return {error: false, data: res.data}
  })
  .catch((error) => {
    dispatch({
      type: authTypes.PROFILE_FAILURE,
    })
    const errorHandler = error
    ? error.response
      ? error.response.data
      : error.response
    : 'Something went wrong!'

  return { error: true, data: errorHandler }
  })
}