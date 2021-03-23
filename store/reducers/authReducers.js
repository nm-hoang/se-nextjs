/** @format */

import { authTypes } from 'constants/index'

const initialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  auth_token: null,
  message: null,
  data: null,
  status: null,
}

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      }

    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      }

    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        message: null,
        auth_token: action.payload.auth_token,
        data: action.payload.data,
      }

    default:
      return {
        ...state,
      }
  }
}

export const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case authTypes.PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default loginReducers
