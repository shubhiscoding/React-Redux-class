import { useSelector } from "react-redux"

const Cart = () => {
    let cartItems = useSelector((state)=>{
        return state.items || [];
    });
    let cart = [];
    for(var item of Object.values(cartItems)){
        cart.push(item);
    }

    return (
        <div>
            <h1>Your cart</h1>
            {cart.length === 0 ? <h1>Your cart is empty</h1> : null}
            {
                cart.map(function (item, index) {
                    return item ? (<h1 key={index}> {item.title} {item.quantity}</h1>) : null;
                })
            }

        </div>
    )
}

export default Cart;