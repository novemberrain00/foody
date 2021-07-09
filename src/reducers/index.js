import { combineReducers } from "redux";

const initialIngredientsState = {
    amountForCycle: 1,
    amountForButton: 1
}

const initialMenuState = {
    isMenuOpened: false
}

const ingredientsReducer = (state = initialIngredientsState, action) => {
    switch(action.type) {
        case 'ADD_ING':
            console.log(state.amountForButton)
            return {
                amountForCycle: state.amountForCycle + 1,
                amountForButton: state.amountForButton + 1
            }
        case 'REM_ING':
            console.log(state.amountForButton)
            return {
                ...state,
                amountForButton: state.amountForButton - 1
            }
        default:
            return state;
    }
}

const menuReducer = (state = initialMenuState, action) => {
    switch(action.type) {
        case 'MENU_OPENED': 
            return {
                isMenuOpened: !state.isMenuOpened
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    ings: ingredientsReducer,
    menu: menuReducer
})

export default rootReducer;