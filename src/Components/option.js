import React from 'react'
import './options.css'
import '../images/bg.jpg'
import { useLocation } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
let var1 = 0;
let var2 = 0;
let var3 = 0;
export default function Option() {
  const location = useLocation()
  const { c } = location.state
  console.log(c)
  const flags = [{"key": '1abc', "funzone" : 1, "food" : 1, "shop" : 1}, 
                 {"key": '2abc', "funzone" : 0, "food" : 1, "shop" : 1}]
  // console.log(flags[0]["key"])
  flags.map((i)=>{
    if(c === i["key"]){
      var1 = i["funzone"]
      var2 = i["food"]
      var3 = i["shop"]
    }
  })
  console.log(var1, var2, var3)
  return (
    <div className='funbg'>
      <div className='wrapper-option'>
        {var1===1?<button className="submit-button-shop" type='submit' ><Link style={{textDecoration : 'none','color':'black'}} to='/funzone'>Funzone</Link></button>:console.log("hi")}
        {var2===1?<button className="submit-button-food" type='submit' ><Link style={{textDecoration : 'none','color':'black'}} to='/foodcourt'>Food</Link></button>:console.log("hi")}
        {var3===1?<button className="submit-button-shop" type='submit' ><Link style={{textDecoration : 'none','color':'black'}} to='/shop-options'>Shop</Link></button>:console.log("hi")}     
      </div>
    </div>
  )
}
