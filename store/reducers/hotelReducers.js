/** @format */

import { hotelTypes } from 'constants/index';

const initialState = {
  isLoading: false,
  error: null,
  status: null,
  testing:null,
}

const hotelReducers = (state = initialState, action) => {
  switch (action.type) {
    case hotelTypes.HOTEL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    
    case hotelTypes.HOTEL_SUCCESS:
    return {
        ...state,
        isLoading: false,
      }
    case hotelTypes.LISTHOTEL_REQUEST:
      return {
        ...state,
        isLoading:true,
      }
      
    case hotelTypes.LISTHOTEL_SUCCESS:
      return {
        ...state,
        isLoading:false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default hotelReducers;
