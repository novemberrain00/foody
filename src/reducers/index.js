import { combineReducers } from "redux";

const initialBannerState = {
    isBannerVisible: true
}

const initialInputsState = {
    inputsArr: [
        {key:0, value: ""}
    ]
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
            const newArr = [...action.payload],
            key = newArr[newArr.length-1].key + 1;
            newArr.push({key, value: ""});
            
            return {
                ...state,
                inputsArr: newArr
            }
        case 'INPUT_REMOVED':
            return {
                ...state
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({banner: bannerReducer, inputs: inputsReducer});

export default rootReducer;