import {PRODUCT_TYPES} from './product.types'


const INITIAL_STATE = {
    product: [],
}

export const productReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case PRODUCT_TYPES.SET_PRODUCT:
            return { ...state, product: payload }
        default:
            return state
    }
} 