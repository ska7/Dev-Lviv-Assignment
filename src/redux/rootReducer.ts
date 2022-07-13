import { AnyAction } from 'redux'
import { Currency } from 'types'
import { SET_BASE_CURRENCY } from './actionTypes'

interface RootReducer {
    baseCurrency: Currency
}

const initState: RootReducer = {
    baseCurrency: {
        name: 'USD',
        symbol: '$',
    },
}

const rootReducer = (state = initState, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case SET_BASE_CURRENCY:
            return { ...state, baseCurrency: payload }

        default:
            return state
    }
}

export default rootReducer
