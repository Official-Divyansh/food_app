import {combineReducers} from 'redux'

import cartReducer from './CartReducer'

let reducer = combineReducers({
    cartReducer
})

const rootReducer = (state, action) =>{
    return reducer(state,action)
}


export default rootReducer