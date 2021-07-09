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

export {
    addIng,
    remIng,
    openMenu
}