import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "../Components/home.css";
import "./CSS/Home.css";
import logo from "../images/logo.png";

export default function Home() {
  const [code, setCode] = useState("");
  const codeChange = (e) => {
    setCode(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="homee">
      <h1 className="Header">
        <img style={{ position: "relative", top: "50px" }} src={logo} />
      </h1>
      <h1 className="tagline">Nav&Shop</h1>
      <h2 style={{ fontSize: "40px" }} className="mallcode mb-4">
        Shop your way.
      </h2>
      <h4 className="mallcode">MallCode:</h4>
      <input type="text" className="mall-code-input" onChange={codeChange} />
      <button className="btn my-3 btn-dark">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/option"
          state={{ c: code }}
        >
          Submit
        </Link>
      </button>
    </div>
  );
}
