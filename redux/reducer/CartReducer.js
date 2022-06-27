let defaultState = {
    selectedItem : {item: [], restaurantName: ""}

}

let cartReducer = (state = defaultState, action) =>{
    switch(action.type){
        case "ADD_TO_CART": {
            let newState = {...state}
            if(action.payload.checkbox){
            newState.selectedItem = {
                item: [...newState.selectedItem.item, action.payload],
                restaurantName: action.payload.restaurantName
            }
        }else{
            console.log("remove Item")

            newState.selectedItem = {
                item: [
                    ...newState.selectedItem.item.filter((item) => item.title != action.payload.title)
                ],
                restaurantName: action.payload.restaurantName
            }
        }
            console.log(newState)

            return newState
        }
        default: 
        return state
    }
}


export default cartReducer