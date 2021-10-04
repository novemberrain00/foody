const hideBanner = () => {
    return {
        type: 'BANNER_HIDEN'
    }
}

const addInput = () => {
    return {
        type: 'INPUT_ADDED' 
    }
}
 
export {
    hideBanner,
    addInput
}