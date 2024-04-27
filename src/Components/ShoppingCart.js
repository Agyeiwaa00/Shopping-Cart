import { useState } from "react";

// Declaring items and price
const items = [
    {
        name:'tomato',
        price: 0.56
    },
    {
        name:'banana',
        price: 1.06
    },
    {
        name:'onions',
        price: 0.36
    },
    {
        name:'eggs',
        price: 4.30
    },
]

// Main function for Shopping Cart
function ShoppingCart (){
const [cart, setCart]= useState([])
const addToCart  =(item) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find(i => item.name===i.name)
    if(itemInCart){
        itemInCart.quantity += 1
        setCart(cartCopy)
    } else {
        setCart(prevCart =>[...prevCart,{...item, quantity:1}])
    }
}
    const increase = name => {
        const cartCopy = [...cart]
        const item =cartCopy.find(i => i.name===name)
        item.quantity += 1
        setCart(cartCopy)
    }
    const decrease = name => {
        const cartCopy = [...cart]
        const item =cartCopy.find(i => i.name===name)
        if(item.quantity) {
        item.quantity -= 1
        } else {
         cartCopy = cartCopy.filter(i => i.name!== name)
        }
        setCart(cartCopy)
    }
    
return( 
<div>
    <h1 className="flex justify-center items-center m-10 font-bold text-4xl">Shopping Cart</h1>
    <div className="cart" class="flex flex-row justify-center">
        <div className="items mr-20">
            <h2 className="font-bold text-3xl m-3">Items</h2>
            {items.map(item => (<div key={item.name}>
                <h3 className="font-bold m-2">{item.name}</h3>
                <p className="m-2">${item.price}</p>
                <button className=" text-sm w-25 px-2 h-8 m-2 bg-gray-200" onClick={() => addToCart(item) }>Add to Cart</button>
                </div>))}
        </div>
        
        <div className="ml-20">
            <h2 className="font-bold text-3xl m-3">Cart</h2>
            {cart.map(item => (<div key={item.name}>
                <h3 className="m-2 font-bold text-gray-600">{item.name}</h3>
                <p>
                    <button className=" bg-gray-200 w-5 h-6 m-1"onClick={()=> decrease(item.name)}>-</button>
                    {item.quantity}
                    <button className=" bg-gray-200 w-5 h-6 m-1" onClick={()=> increase(item.name)}>+</button>
                </p>
                <p className="text-xs">Subtotal: $ {(item.quantity*item.price).toFixed(2)}</p>
                </div>
            ))}
        </div>
        
    </div>
    <div className="total text-center ">
        <h2>Total: $ {cart.reduce((acc,i) => acc + (i.quantity + i.price),0).toFixed(0)}</h2>
    </div>
</div>
)
}
export default ShoppingCart;