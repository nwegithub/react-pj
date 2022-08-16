export const addToRatingList = (ratingReview) =>{
    return{
        type: 'ADD_TO_RATING_LIST',
        ratingReview
    }
}

export default {
    addToRatingList
}