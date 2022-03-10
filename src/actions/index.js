const hideBanner = () => {
    return {
        type: 'BANNER_HIDEN'
    }
}

const inputArrayUpdated = (payload) => {
    return {
        type: 'INPUT_ARRAY_UPDATED',
        payload
    }
}

const recipesListSetted = (payload) => {
    return {
        type: 'RECIPES_LIST_SETTED',
        payload
    }
}

const recipesListUpdated = ({desiredValue, keyCode, valuesList}) => {
    return {
        type: 'RECIPES_LIST_UPDATED',
        payload: {
            desiredValue,
            keyCode,
            valuesList
        }
    }
}

const addInput = (payload) => {
    return {
        type: 'INPUT_ADDED',
        payload
    }
}

const removeInput = (payload) => {
    return {
        type: 'INPUT_REMOVED' ,
        payload
    }
}

const updateInputValue = (payload) => {
    return {
        type: 'INPUT_VALUE_UPDATED',
        payload
    }
}

const recipesCatalogOpened = () => {
    return {
        type: 'RECIPES_CATALOG_OPENED'
    }
}

const recipeModalOpened = (payload) => {
    return {
        type: 'RECIPES_MODAL_OPENED',
        payload
    }
}

const recipeCatalogClosed = () => {
    return {
        type: 'RECIPES_CATALOG_CLOSED'
    }
}
 
export {
    hideBanner,
    addInput,
    removeInput,
    updateInputValue,
    inputArrayUpdated,
    recipesListSetted,
    recipesListUpdated,
    recipesCatalogOpened,
    recipeModalOpened,
    recipeCatalogClosed
}