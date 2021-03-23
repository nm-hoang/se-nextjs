/** @format */

import cookiesService from 'utils/services/cookies'
import { searchEngine, hotelServices } from 'services/index'
import { hotelTypes } from 'constants/index'

export const HotelDetailActions = (id) => async (dispatch) => {
  dispatch({
    type: hotelTypes.HOTEL_REQUEST,
  })
  return await hotelServices.InfoService(id).then((res) => {
    dispatch({
      type: hotelTypes.HOTEL_SUCCESS,
    })
    return { error: false, data: res.data }
  })
}

export const ListHotelsActions = ({ query }) => (dispatch) => {
  dispatch({
    type: hotelTypes.LISTHOTEL_REQUEST,
  })
  return searchEngine.Search({ query }).then((res) => {
    dispatch({
      type: hotelTypes.LISTHOTEL_SUCCESS,
    })
    return { error: false, data: res.data }
  })
}
