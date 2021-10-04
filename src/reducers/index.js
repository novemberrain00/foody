import { combineReducers } from "redux";

const initialBannerState = {
    isBannerVisible: true
}

const initialInputsState = {
    amount: 1
}

const bannerReducer = (state = initialBannerState, action) => {
    switch(action.type) {
        case 'BANNER_HIDEN':
            return {
                ...state,
                isBannerVisible: false
            }
        default:
            return state
    }
}

const inputsReducer = (state = initialInputsState, action) => {
    switch(action.type) {
        case 'INPUT_ADDED':
            return {
                ...state,
                amount: state.amount + 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({banner: bannerReducer, inputs: inputsReducer});

export default rootReducer;