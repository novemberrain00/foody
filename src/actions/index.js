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

const updIngsArr = (arr) => {
    return {
        type: 'INGS_ARRAY_UPDATED',
        arr
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
    closeModal
}