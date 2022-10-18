import React, { useEffect, useState } from 'react';
import '../style/cart.css';

export default function Cart({getUsername,state,dispatch}) {
  const cart = JSON.parse(localStorage.getItem('cart-'+getUsername())) || [];
  
  const [total,setTotal] = useState(0);

  const changeQty = (id,qty) => {
      dispatch({
        type : "CHANGE_CART_QTY",
        payload :{
          id,
          qty,
        },
      })
  };
  
  useEffect(()=> {
    cart && setTotal(cart.reduce((acc,curr) => acc+Number(curr.price)*curr.qty,0))
  },[cart])

  
  return (
    <div className='cart-div'>
      <b >Cart</b>
      <b>Subtotal: ₹ {total}</b>
      {
        cart && cart.length > 0 
        ? 
        (cart.map((item) => (
          <div key={item.title} className="cart-div-1">
            <div className="cart-div-2" ><img src={item.thumbnail}></img></div>
            <div className="cart-div-3">
              <span>{item.title}</span>
              <span>₹ {item.price}</span>
            </div>
            <div className="cart-div-4">
              <button onClick={()=>changeQty(item.id,item.qty-1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={()=>changeQty(item.id,item.qty+1)}>+</button>
            </div>
          </div>
        )))
        : 
        (<p>Cart is Empty</p>)
      }
    </div>
  )
}
