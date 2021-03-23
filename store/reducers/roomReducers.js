/** @format */

import { roomTypes } from 'constants/index';

const initialState = {
    isLoading: false,
    error: null,
    status: null,
}

const roomReducers = (state = initialState, action) => {
    switch (action.type) {
        case roomTypes.ROOM_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case roomTypes.ROOM_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return {
                ...state,
            }
    }
}

export default roomReducers;