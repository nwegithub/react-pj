const signInCountReducer = (state= null, action) =>{
    switch(action.type){
        case 'ADD_TO_COUNT_SIGN'
        :
        return action.countSign

        default
        :
        return state
    }

}
export default signInCountReducer