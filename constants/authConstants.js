/** @format */

import { createRequestTypes } from 'utils/constantCreator'

const login = 'login'
const action = ['request', 'success', 'failure']

const profile = 'profile'

const AUTH_CONSTANTS = {
  ...createRequestTypes(login, action),
  ...createRequestTypes(profile, action)
}

export default AUTH_CONSTANTS
