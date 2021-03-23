/** @format */

import { createRequestTypes } from '../utils/constantCreator'

const payment = 'payment'
const action = ['request', 'success', 'failure']

const PAYMENT_CONSTANTS = {
  ...createRequestTypes(payment, action),
}

export default PAYMENT_CONSTANTS
