const ratingListRecuder = (state= null, action) =>{
    switch(action.type){
        case 'ADD_TO_RATING_LIST'
        :
        return action.ratingReview

        default
        :
        return state
    }

}
export default ratingListRecuder