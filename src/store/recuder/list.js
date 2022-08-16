const listReducer = (state= null, action) => {
    switch(action.type){
        case 'ADD_TO_LIST'
        :
        return action.bookinginformation

        default 
        :
        return state
    }
}

export default listReducer