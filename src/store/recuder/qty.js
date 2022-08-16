

const bkQtyRecuder =  (state=0, action ) =>{
    switch(action.type){
        case 'SET_BK_TOTAL_QTY'
        :
        return action.bkTotQty

        default 
        :
        return state
    }
}
export default bkQtyRecuder