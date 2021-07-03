import { combineReducers } from "redux";

const initialIngredientsState = {
    quantity: 0
}

const ingredientsReducer = (state = initialIngredientsState, action) => {
    switch(action.type) {
        case 'ADD_ING':
            return {
                quantity: state.quantity + 1
            }
        case 'REM_ING':
            return {
                quantity: state.quantity - 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    ings: ingredientsReducer
})

export default rootReducer;