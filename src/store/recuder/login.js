const loginDataRecuder = (state= null, action) =>{
    switch(action.type){
        case 'ADD_TO_LOGIN_DATA'
        :
        return action.nameList

        default
        :
        return state
    }

}
export default loginDataRecuder