export const addToList = (bookinginformation) =>{
    return{
            type: 'ADD_TO_LIST',
            bookinginformation
    }
}

export default {
    addToList
}