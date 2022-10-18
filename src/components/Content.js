import React,{ useEffect, useState }from 'react';
import axios from "axios";
import '../style/content.css'

export default function Content() {
    const [products,setProducts]=useState([]);
    //----------------------------------------------------
    const fetchproducts = async () => { 
        const {data} = await axios.get('https://dummyjson.com/products');
        setProducts(data.products);
    };
    //----------------------------------------------------
    useEffect(()=>{
        fetchproducts();
      },[])
  return (
    <div className="product-div">
      {products.map(item => (
        <div key={item.id} className="product-div-1">
            <img src={item.thumbnail}/>
            <div className="product-div-2">
            <span>{item.title}</span>
            <b>₹ {item.price}</b>
            </div>
        </div>
      ))}
    </div>
  )
}
