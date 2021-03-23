/** @format */

import axios from 'utils/services/axios'
const prefix = 'hotels'

class HotelServices { 
  InfoService = (id) => {
    return axios.request({
      method: 'GET',
      url: `${prefix}/${id}`,
    })
  }
}

export default HotelServices;