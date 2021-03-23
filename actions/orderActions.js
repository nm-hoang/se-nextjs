/** @format */

import cookiesService from 'utils/services/cookies'
import { orderServices } from 'services/index'
import { orderTypes } from 'constants/index'


export const GetOrderlActions = (id) => (dispatch) =>{
    dispatch({
        type: orderTypes.ROOM_REQUEST,
    })  
    return orderServices
        .InfoService(id)
        .then((res) => {
            dispatch({
                type: roomTypes.ROOM_SUCCESS,
            })
        return {error: false, data: res.data}
        })
}



