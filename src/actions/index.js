const hideBanner = () => {
    return {
        type: 'BANNER_HIDEN'
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
 
export {
    hideBanner,
    addInput,
    removeInput,
    updateInputValue
}