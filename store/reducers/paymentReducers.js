/** @format */

import { paymentTypes } from 'constants/index';

const initialState = {
    isLoading: false,
    error: null,
    status: null,
}

const paymentReducers = (state = initialState, action) => {
    switch (action.type) {
        case orderTypes.PAYMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case orderTypes.PAYMENT_SUCCESS:
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

export default paymentReducers;