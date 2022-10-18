import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/register.css";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
// import Alert from 'react-bootstrap/Alert';

export default function Register() {
  const success = useNavigate();

  const [signinData, setSigninData] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
  });

  const [data, setData] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;
    setSigninData(() => {
      return {
        ...signinData,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    const { name, email, mobile, pass } = signinData;
    if (name === "") {
      alert("Enter Your Name");
    } else if (email === "") {
      alert("Enter Your Email");
    } else if (!email.includes("@")) {
      alert("Enter Valid Email");
    } else if (mobile === "") {
      alert("Enter Mobile Number");
    } else if (mobile.length < 10) {
      alert("Enter valid 10 digit Mobile number");
    } else if (pass === "") {
      alert("Enter Your Password");
    } else if (pass.length < 8) {
      alert("Password should be 8 or More Charecters");
    } else {
      localStorage.setItem(email, JSON.stringify([...data, signinData]));
      alert("Congratulations , Your account has been created successfully .please logIn to continue..");
      success("/login")
    }
  };
  return (
    <div className="register">
      <div className="signup">
        <div className="signup-page ">
          
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={getdata}

          />
          <br />
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            onChange={getdata}
          />
          <br />
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            onChange={getdata}
          />
          <br />
          <input
            type="password"
            placeholder="Create Your Password"
            name="pass"
            onChange={getdata}
          />
          <br />
          <button onClick={addData}>Register</button>
          <div className="register-navbar">
            <Link to="/" style={{ borderTopRightRadius: "25px" }}>
              <IoMdArrowBack /> Home
            </Link>
            <Link to="/login" style={{ borderTopLeftRadius: "25px" }}>
              <IoMdArrowBack /> Back to LogIn Page
            </Link>
          </div>
        </div>
        <div className="signup-data">
          <h1>Welcome..</h1>
          <p>sign up with the details to get started</p>
          <img src="logo.png"/>
        </div>
      </div>
    </div>
  );
}
