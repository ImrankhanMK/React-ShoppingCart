import React from 'react';
import '../style/products.css'
export default function Products({getUsername,state,dispatch}) {

  const {products} = state ;
  const cart = JSON.parse(localStorage.getItem('cart-'+getUsername())) || [];

  return (
    <div className="product-div">
      {products.map((item)=>(
       <div key={item.id} className="product-div-1">
        <img src={item.thumbnail}></img>
        <div className="product-div-2">
          <span>{item.title}</span>
          <b>₹ {item.price}</b>
        </div>
        {
          cart.some((p ) => p.id === item.id)
          ?
          (<button id="remove" onClick={() => dispatch({
            type : "REMOVE_FROM_CART",
            payload : item ,
          })}>Remove from Cart</button>) 
          :
          (<button id="add" onClick={() => dispatch({
            type : "ADD_TO_CART",
            payload : {cart,
              id : item.id,
              title : item.title,
              thumbnail : item.thumbnail,
              qty : 1,
              price : item.price,
            },
          })}>Add to Cart</button>)
      }
      </div>
      ))}
    </div>
  )
}
