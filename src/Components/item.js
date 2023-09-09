import React, { useContext, useState, useEffect } from "react";
import image from "../images/item.png";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./CSS/Item.css";
import { Cart } from "../Context/cart";
// import {car} from './ARShop'

const Item = (props) => {
  const { cartItems, setCart } = useContext(Cart);
  const Addbtn = (event) => {
    document.getElementById(event.target.id).style.display = "none";
    document.getElementById(`a${event.target.id}`).style.display = "block";
    cartItems[props.data.id] = 1;
    setCart({
      1: cartItems[1],
      2: cartItems[2],
      3: cartItems[3],
      4: cartItems[4],
      5: cartItems[5],
      6: cartItems[6],
      7: cartItems[7],
      8: cartItems[8],
      9: cartItems[9],
      10: cartItems[10],
      11: cartItems[11],
      12: cartItems[12],
    });
  };
  const addVal = (event) => {
    cartItems[props.data.id] += 1;
    console.log(cartItems);
    setCart({
      1: cartItems[1],
      2: cartItems[2],
      3: cartItems[3],
      4: cartItems[4],
      5: cartItems[5],
      6: cartItems[6],
      7: cartItems[7],
      8: cartItems[8],
      9: cartItems[9],
      10: cartItems[10],
      11: cartItems[11],
      12: cartItems[12],
    });
  };
  const subVal = (event) => {
    if (cartItems[props.data.id]) {
      cartItems[props.data.id] -= 1;
    }
    // else if (cartItems[props.data.id] == 0) {
    //   document.getElementById(event.target.id).style.display = "block";
    //   document.getElementById(`a${event.target.id}`).style.display = "none";
    // }
    setCart({
      1: cartItems[1],
      2: cartItems[2],
      3: cartItems[3],
      4: cartItems[4],
      5: cartItems[5],
      6: cartItems[6],
      7: cartItems[7],
      8: cartItems[8],
      9: cartItems[9],
      10: cartItems[10],
      11: cartItems[11],
      12: cartItems[12],
    });
  };
  const data = Array.from(props.data);
  return (
    <div class="card-wrapper">
      {/* {data.map((item) => ( */}
      <div class="card">
        <img src={props.data.Img} class="h-80 card-img-top" alt="..." />
        {console.log(4)}
        <div class="card-body">
          <h5 class="card-title font-bold">{props.data.name}</h5>
          <p class="card-text">Price:{props.data.price}</p>
          <p class="card-text">Gender:{props.data.Gender}</p>
          <p class="card-text">Colour:{props.data.Colour}</p>
          <button
            id={`addcart${props.data.id}`}
            className="btn mt-2"
            onClick={Addbtn}
          >
            Add to cart
          </button>
          <div
            className="mt-2"
            id={`aaddcart${props.data.id}`}
            style={{ display: "none" }}
          >
            <button className="btn btn-primary mr-1">
              <AiOutlineMinus onClick={subVal} />
            </button>
            {cartItems[props.data.id]}
            <button className="btn btn-primary ml-1">
              <AiOutlinePlus onClick={addVal} />
            </button>
          </div>
        </div>
        {/* <a href="#" class="btn btn-primary">AR</a> */}
      </div>
      {/* ))} */}
    </div>
  );
};
// export {cartItems}
export default Item;
