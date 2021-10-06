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

const removeInput = () => {
    return {
        type: 'INPUT_REMOVED' 
    }
}
 
export {
    hideBanner,
    addInput,
    removeInput
}