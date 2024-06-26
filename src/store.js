import { createStore } from "redux";
const ADD_TO_CART = "ADD_TO_CART";

const addToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product
    };
}

function cartReducer(state= { items: {}}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
        const product = action.payload;
        const newCart = { ...state.items };
        if (!newCart[product.id]) {
            newCart[product.id] = {
                ...product,
                quantity: 0
            };
        }
        newCart[product.id].quantity += 1;
        return{
            ...state,
            items: newCart,
        };
    }
    case "REMOVE_FROM_CART": {
        const product = action.payload;
        const newCart = { ...state.items };
        if (!newCart[product.id]) return;
        newCart[product.id].quantity -= 1;
        return {
            ...state,
            items: newCart,
        };
    }
    default:
      return state;
  }
}


const store = createStore(cartReducer);

export default store;
export { addToCart };

// action is an object 

// type
// payload
