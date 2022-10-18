import { useEffect, useReducer } from "react";
import {useLocation } from "react-router";
import "../style/welcome.css";
import { useNavigate } from 'react-router';
//import { CartReducer } from "../reducers/CartReducer";
import Products from "./Products";
import Cart from "./Cart";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default function WelcomeUser() {

  const location = useLocation();
  const back =useNavigate();
  
  
  //-----------------------------------------------------
  const displayName = () => {
    const getUser = localStorage.getItem(location.state.userId);
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      return (user[0].name);
    }
  };

  const CartReducer = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state,products: action.payload};
        case "ADD_TO_CART":         
            localStorage.setItem('cart-'+displayName(), JSON.stringify([{...action.payload},...action.payload.cart]))
            return {...state,cart :[{...action.payload},...state.cart]};
        case "REMOVE_FROM_CART":
            localStorage.setItem('cart-'+displayName(), JSON.stringify(state.cart.filter((c) => c.id !== action.payload.id)))
            return {...state,cart:state.cart.filter((c) => c.id !== action.payload.id)};
        case "CHANGE_CART_QTY" :
            localStorage.setItem('cart-'+displayName(), JSON.stringify(state.cart.filter((c) => c.id === action.payload.id ? c.qty=action.payload.qty : c.qty)))
            return {...state,cart:state.cart.filter((c) => c.id === action.payload.id ? c.qty=action.payload.qty : c.qty)}
        default:
        break;
    }
  };

  const [state, dispatch] = useReducer(CartReducer,{
    products :[],
    cart :[],
  });
  
  //----------------------------------------------------
  const fetchproducts = async () => {
    const {data} = await axios.get('https://dummyjson.com/products')
    dispatch({
      type : "ADD_PRODUCTS",
      payload : data.products ,
    })
  };
   
  //----------------------------------------------------
    useEffect(()=>{
        fetchproducts();
      },[])
  //-------------------------------------------------------
  const deleteUser = () => {
    localStorage.removeItem(location.state.userId);
    back("/");
    alert("Yout account has been deleted successfully..")
  };
  //-------------------------------------------------------
  return (
    <div>
      <div className="welcome">
      <h1>Greetings <span>{displayName()}</span>..</h1>
      <DropdownButton id="dropdown-basic-button" title="Profile">
      <Dropdown.Item><button id="logout" onClick={() => back("/login")}>Logout</button></Dropdown.Item>
      <Dropdown.Item ><button id="delete" onClick={deleteUser}>Delete account</button></Dropdown.Item>
      </DropdownButton>
      </div>
      <div className="products">
          <Products getUsername={displayName} state={state} dispatch={dispatch}/>
          <Cart getUsername={displayName} state={state} dispatch={dispatch}/>
      </div>
    </div>
    
  );
}
