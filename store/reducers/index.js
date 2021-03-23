/** @format */

import { combineReducers } from 'redux'

import authReducers from './authReducers'
import hotelReducers from './hotelReducers'
const rootReducer = combineReducers({
  //
  authReducers,
  hotelReducers
})

export default rootReducer
