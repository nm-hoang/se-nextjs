/** @format */

import cookiesService from 'utils/services/cookies'
import { roomServices } from 'services/index'
import { roomTypes } from 'constants/index'


export const RoomDetailActions = (id) => (dispatch) =>{
    dispatch({
        type: roomTypes.ROOM_REQUEST,
    })  
    return roomServices
        .InfoService(id)
        .then((res) => {
            dispatch({
                type: roomTypes.ROOM_SUCCESS,
            })
        return {error: false, data: res.data}
        })
}

export const ListRoomActions = (idHotel) => (dispatch) =>{
    dispatch({
        type: roomTypes.ROOM_REQUEST,
    })  
    return roomServices
        .ListRoomService(idHotel)
        .then((res) => {
            dispatch({
                type: roomTypes.ROOM_SUCCESS,
            })
        return {error: false, data: res.data}
        })
}



