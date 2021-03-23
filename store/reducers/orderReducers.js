/** @format */

import { orderTypes } from 'constants/index';

const initialState = {
    isLoading: false,
    error: null,
    status: null,
}

const getOrderReducers = (state = initialState, action) => {
    switch (action.type) {
        case orderTypes.ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case orderTypes.ORDER_SUCCESS:
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