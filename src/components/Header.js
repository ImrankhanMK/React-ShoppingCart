import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <div className="header">
      <img src="logo-img.png"/>
      <div className="a-div">
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </div>
      
    </div>
  );
}

