/** @format */

import { createRequestTypes } from '../utils/constantCreator'

const hotel = 'hotel'
const listhotel = 'listhotel' 
const action = ['request', 'success', 'failure']

const HOTEL_CONSTANTS = {
  ...createRequestTypes(hotel, action),
  ...createRequestTypes(listhotel,action),
}

export default HOTEL_CONSTANTS
