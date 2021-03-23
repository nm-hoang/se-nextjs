/** @format */

import cookiesService from 'utils/services/cookies'
import { paymentServices } from 'services/index'
import { paymentTypes } from 'constants/index'

export const PaymentActions = ({ amount }) => (dispatch) => {
  dispatch({
    type: paymentTypes.PAYMENT_REQUEST,
  })
  return paymentServices.CreateURL({ amount }).then((res) => {
    dispatch({
      type: paymentTypes.PAYMENT_SUCCESS,
    })

    return { error: false, data: res.data }
  })
}

export const OrderActions = ({ order }) => (dispatch) => {
  dispatch({
    type: paymentTypes.PAYMENT_REQUEST,
  })

  return paymentServices.SaveOrder({ order }).then((res) => {
    dispatch({
      type: paymentTypes.PAYMENT_SUCCESS,
    })

    return { error: false, data: res.data }
  })
}
