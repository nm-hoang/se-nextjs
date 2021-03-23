/** @format */

import { createRequestTypes } from '../utils/constantCreator'

const order = 'order'
const action = ['request', 'success', 'failure']

const ORDER_CONSTANTS = {
  ...createRequestTypes(order, action),
}

export default ORDER_CONSTANTS
