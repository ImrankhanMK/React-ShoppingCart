
export const CartReducer = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state,products: action.payload};
        case "ADD_TO_CART":         
            localStorage.setItem('cart', JSON.stringify([{...action.payload},...state.cart]))
            return {...state,cart :[{...action.payload},...state.cart]};
        case "REMOVE_FROM_CART":
            localStorage.setItem('cart', JSON.stringify(action.payload.cart.filter((c) => c.id !== action.payload.id)))
            return {...state,cart:action.payload.cart.filter((c) => c.id !== action.payload.id)};
        case "CHANGE_CART_QTY" :
            localStorage.setItem('cart', JSON.stringify(action.payload.cart.filter((c) => c.id === action.payload.id ? c.qty=action.payload.qty : c.qty)))
            return {...state,cart:action.payload.cart.filter((c) => c.id === action.payload.id ? c.qty=action.payload.qty : c.qty)}
        default:
        break;
    }
};

