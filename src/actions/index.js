const addIng = () => {
    return {
        type: 'ADD_ING'
    }
}

const remIng = () => {
    return {
        type: 'REM_ING'
    }
}

const openMenu = () => {
    return {
        type: 'MENU_OPENED'
    }
}

const updIngsArr = (ingsArr) => {
    return {
        type: 'INGS_ARRAY_UPDATED',
        ingsArr
    }
}

const recipesSelected = (selectedRecipes) => {
    return {
        type: 'RECIPES_SELECTED',
        selectedRecipes
    }
}

const setAllRecipes = (allRecipes) => {
    return {
        type: 'RECIPES_SET',
        allRecipes
    }
}


const openModal = (modalData) => {
    return {
        type: 'MODAL_OPENED',
        modalData
    }
}

const closeModal = () => {
    return {
        type: 'MODAL_CLOSED'
    }
}



export {
    addIng,
    remIng,
    openMenu,
    updIngsArr,
    openModal,
    closeModal,
    recipesSelected,  
    setAllRecipes,  
}