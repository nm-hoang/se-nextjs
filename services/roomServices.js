/** @format */

import axios from 'utils/services/axios'
const prefix = 'rooms'

class RoomServices {
  InfoService = (id) => {
    return axios.request({
      method: 'GET',
      url: `${prefix}/${id}`,
    })
  }
  ListRoomService = (idHotel) => {
    return axios.request({
      method: 'GET',
      url: `${prefix}/hotel?id=${idHotel}`,
    })
  }
}

export default RoomServices;