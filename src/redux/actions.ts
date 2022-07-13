import { Currency } from 'types'
import { SET_BASE_CURRENCY } from './actionTypes'

export const setBaseCurrencyAction = (currency: Currency) => ({
    type: SET_BASE_CURRENCY,
    payload: currency,
})
