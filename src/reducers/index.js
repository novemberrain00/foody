import { combineReducers } from "redux";

const initialBannerState = {
    isBannerVisible: true
}

const initialRecipesState = {
    recipesList: [],
    constRecipesList: [],
    isRecipesCatalogOpened: false,
    recipeData: {
        label: "",
        image: "",
        ingredientLines: [],
        calories: null
    }
}

const initialInputsState = {
    inputsArr: [
        {key:0, value: ""}
    ]
}

const recipesReducer = (state = initialRecipesState, action) => {
    switch(action.type) {
        case 'RECIPES_LIST_SETTED':
            return {
                ...state,
                recipesList: action.payload,
                constRecipesList: action.payload
            }
        case 'RECIPES_LIST_UPDATED':
            const { desiredValue, keyCode, valuesList } = action.payload;
            const parseRecipesList = (parsingList, desiredValue) => {

                const interList = []; 

                parsingList.forEach(recipeObj => {
                    let totalLine = '';

                    recipeObj.recipe.ingredientLines.forEach(line => {
                        totalLine += " " + line.toUpperCase();    
                    });

                    if(totalLine.includes(desiredValue.toUpperCase())) interList.push(recipeObj);
                });
                return interList;
            }

            const parseConstantList = (constList, valuesList, desiredIndexValue) => {
                let interList = constList; //list which updates with every call of parseConstList()

                while(desiredIndexValue + 1 < valuesList.length) {
                    constList.forEach((recipeObj, i) => {
                        let totalLine = '';

                        recipeObj.recipe.ingredientLines.forEach(line => {
                            totalLine += " " + line.toUpperCase();    
                        });

                        if(!totalLine.includes(valuesList[desiredIndexValue].value.toUpperCase())) {
                            interList = [...interList.slice(0, i), ...interList.slice(i+1, interList.length-1)];
                        }
                    });

                    desiredIndexValue++;
                }

                return interList;
            }

            const { recipesList, constRecipesList } = state;
            const totalList = keyCode === 8 || !recipesList ? parseConstantList(constRecipesList, valuesList, 0) 
                                            : parseRecipesList(recipesList, desiredValue);
            
            return {
                ...state,
                recipesList: totalList
            }

        case 'RECIPES_CATALOG_OPENED':
            return {
                ...state,
                isRecipesCatalogOpened: true
            }
        case 'RECIPES_CATALOG_CLOSED':
            return {
                ...state,
                recipeData: {
                    label: "",
                    image: "",
                    ingredientLines: [],
                    calories: null
                },
                isRecipesCatalogOpened: false
            }
        case 'RECIPES_MODAL_OPENED':
            return {
                ...state,
                recipeData: action.payload
            }
        default:
            return state
    }
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
        case 'INPUT_ARRAY_UPDATED':
            return {
                ...state,
                inputsArr: action.payload
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

const rootReducer = combineReducers({banner: bannerReducer, inputs: inputsReducer, recipes: recipesReducer});

export default rootReducer;