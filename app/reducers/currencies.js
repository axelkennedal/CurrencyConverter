import {
    SWAP_CURRENCY,
    CHANGE_CURRENCY_AMOUNT,
} from "../actions/currencies";

const initialState = {
    fromCurrency: "SEK",
    toCurrency: "USD",
    amount: 100,
    conversions: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0,
            }
        case SWAP_CURRENCY:
            return {
                ...state,
                fromCurrency: state.toCurrency,
                toCurrency: state.fromCurrency,
            }
        default:
            return state;    
    }
};
export default reducer;