import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import { IoMdArrowBack } from "react-icons/io";


export default function Login() {

  const fail = useNavigate();
  const success = useNavigate();
  const notfound = useNavigate()
  
  const [loginData,setLoginData] = useState({
    email:"",
    pass: "",
  });
  

  const getData = (e) => {
    const { value, name  } = e.target;
    setLoginData(() => {
      return{
        ...loginData,
        [name]:value
      }
    })
  }

  const addData = () =>{
    const getUserArr = localStorage.getItem(loginData.email)
    const {email,pass} = loginData;
    if (email === "") {
      alert("Enter Your Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid Email");
    }else if(pass === ""){
      alert("Enter Your Password");
    }else if(pass.length < 8){
      alert("Password should be 8 or More Charecters");
    }else{
        if(getUserArr && getUserArr.length){
          const userdata = JSON.parse(getUserArr);
          const userlogin = userdata.filter((el,k) =>{
            return el.email === email && el.pass === pass
          })
          if(userlogin.length === 0){
            alert("Bad credentials...Please Enter correct details..");
            fail("/login");
          }else{success("/welcomeuser",{state : {userId: email}})
         }
        }else {
          alert("No Account found with the provides credentials..please register to continue.. ")
          notfound("/register")
        }
    }
  }
  return (
    <div className="login">
      <div className="login-div">
        <div className="login-div-left">
          <h1>Log In</h1>
          <p>Log in here to access your Wishlists and Tract your orders.</p>
          <img src="logo.png"/>
        </div>
        <div className="login-div-right">
          <input
            type="text"
            placeholder="Email ID or Mobile Number"
            name="email"
            onChange={getData}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            onChange={getData}
          />
          <br />
          <p>
            By continuing, you agree to <a href="/">Terms of Use</a> and{" "}
            <a href="/">Privacy Policy.</a>
          </p>
          <button onClick={addData}>Log-In</button>
          <p>
            New user ?{" "}
            <Link to="/register" className="register-link">
              Create an account.
            </Link>
          </p>
          <div className="link-div">
            <Link to="/" className="back-link">
              <IoMdArrowBack /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
