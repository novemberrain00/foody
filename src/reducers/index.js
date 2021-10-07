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
            const { inputsArr } = state;
            const deletedItem = inputsArr.indexOf(...inputsArr.filter(item => item.key === action.payload)),
                firstArr = inputsArr.slice(0, deletedItem),
                lastArr = inputsArr.slice(deletedItem+1, inputsArr.length),
                totalArr = [...firstArr, ...lastArr];

            return {
                ...state,
                inputsArr: totalArr
            }
        case 'INPUT_VALUE_UPDATED':
            const {id, value} = action.payload,
            editedArr = state.inputsArr,
            editedItem = editedArr.indexOf(...editedArr.filter(item => item.key === id));
            editedArr[editedItem].value = value;
            return {
                ...state,
                inputsArr: editedArr
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({banner: bannerReducer, inputs: inputsReducer});

export default rootReducer;