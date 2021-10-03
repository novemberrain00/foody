import { combineReducers } from "redux";

const initialBannerState = {
    isBannerVisible: true
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

const rootReducer = combineReducers({banner: bannerReducer});

export default rootReducer;