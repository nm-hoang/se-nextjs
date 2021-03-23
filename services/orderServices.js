/** @format */

import axios from 'utils/services/axios'
const prefix = 'orders'

class OrderServices {
  InfoService = (id) => {
    return axios.request({
      method: 'GET',
      url: `${prefix}/${id}`,
    })
  }
}

export default OrderServices;