import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
const Cart = () => {
    const [category, setCategory] = useState("");
    const [mycart, setMycart] = useState([]);
    let cartItems = useSelector((state)=>{
        return state.items || [];
    });
    let cart = [];
    for(var item of Object.values(cartItems)){
        cart.push(item);
    }
    useEffect(() => {
        let filter = [];
        for(let item of Object.values(cart)){
            console.log(item);
            if(item.category == category|| category === ""){
                filter.push(item);
            }
        }
        console.log(cart);
        console.log(filter);
        setMycart(filter);
    }, [cartItems, category])
    
    // setMycart(cart);
   

    return (
        <div>
            <div className="cat">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>  
                    <option value="">All</option>
                    <option value="1">Electronics</option>
                    <option value="3">Jewelery</option>
                </select>
            </div>
            <h1>Your cart</h1>
            {mycart.length === 0 ? <h1>Your cart is empty</h1> : null}
            {
                mycart.map( (item) => {
                    return item ? (<h1 key={item.id}> {item.title} {item.quantity} {item.category} </h1>) : null;
                })
            }

        </div>
    )
}

export default Cart;