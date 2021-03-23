/** @format */

import { createRequestTypes } from '../utils/constantCreator'

const room = 'room'
const action = ['request', 'success', 'failure']

const ROOM_CONSTANTS = {
  ...createRequestTypes(room, action),
}

export default ROOM_CONSTANTS
