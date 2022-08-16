import { combineReducers } from 'redux';
import WishList from './wishlist'
import List from './list'
import Qty from './qty'
import Wqty from './wqty'
import Rating from './rating'
import Auth from './login'



const rootRecuder = combineReducers({
    
    WishList,
    List,
    Qty,
    Wqty,
    Rating,
    Auth
    
    
})

export default rootRecuder