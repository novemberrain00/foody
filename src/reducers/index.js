import { combineReducers } from "redux";

const initialIngredientsState = {
    amountForCycle: 1,
    amountForButton: 1,
    ingsArr: [{id: 0, value: ''}],
    allRecipes: [],
    selectedRecipes: []

}

const initialMenuState = {
    isMenuOpened: false
}

const initialModalState = {
    modalWrapperClassList: 'modal-wrapper position-absolute',
    modalData: {
        label: '',
        imagePath: '',
        ingsLines: [],
        calories: ''
    }
}

const ingredientsReducer = (state = initialIngredientsState, action) => {
    switch(action.type) {
        case 'ADD_ING':
            return {
                ...state,
                amountForCycle: state.amountForCycle + 1,
                amountForButton: state.amountForButton + 1
            }
        case 'REM_ING':
            return {
                ...state,
                amountForButton: state.amountForButton - 1
            }
        case 'INGS_ARRAY_UPDATED':
            return {
                ...state,
                ingsArr: action.ingsArr
            }
        case 'RECIPES_SELECTED':
            console.log(action.selectedRecipes)
            return {
                ...state,
                selectedRecipes: action.selectedRecipes
            }
        case 'RECIPES_SET':
            console.log(action.allRecipes)
            return {
                ...state,
                allRecipes: action.allRecipes
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

const modalReducer = (state = initialModalState, action) => {
    switch(action.type) {
        case 'MODAL_OPENED':
            return {
                ...state,
                modalWrapperClassList: 'modal-wrapper modal-wrapper_active position-absolute',
                modalData: action.modalData
            }
        case 'MODAL_CLOSED':
            return {
                ...state,
                modalWrapperClassList: 'modal-wrapper position-absolute',
                modalData: {
                     label: '',
                    imagePath: '',
                    ingsLines: [],
                    calories: ''
                }
            }
        default:
            return state
    }
} 

const rootReducer = combineReducers({
    ings: ingredientsReducer,
    menu: menuReducer,
    modal: modalReducer
})

export default rootReducer;