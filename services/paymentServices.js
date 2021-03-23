/** @format */

import axios from 'utils/services/axios'
const prefix = 'payments'

class PaymentServices {
  CreateURL = ({ amount }) => {
    return axios.request({
      method: 'POST',
      url: `${prefix}/create_payment_url`,
      data: { amount: Math.round(amount) },
    })
  }

  SaveOrder = ({ order }) => {
    try {
      return axios
        .request({
          method: 'POST',
          url: `orders`,
          data: order,
        })
        .catch((error) => {
          return error.message
        })
    } catch (error) {
      return { error: true }
    }
  }
}

export default PaymentServices
