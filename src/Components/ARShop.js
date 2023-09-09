import React, { useState } from "react";
import { useContext } from "react";
import Item from "./item";
import "../Components/ARShop.css";
import { Link } from "react-router-dom";
import "../fun.css";
import { Cart } from "../Context/cart";
import Cartitem from "./cartItem";

export default function ARShop(props) {
  var sum = 0;
  const [activeButton, setactiveButton] = useState("Men");
  const { cartItems, setCart } = useContext(Cart);
  const [val, setVal] = useState(0);
  const [show, setShow] = useState(false);

  var count = 0;
  for (const prop in cartItems) {
    count += cartItems[prop];
  }

  return (
    <div
      className="funbg container"
      style={{ height: "91vh", background: "white" }}
    >
      <div
        className="mt-2"
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer", position: "relative", float: "right" }}
      >
        <i className="fa" style={{ "font-size": "30px" }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          {count}
        </span>
      </div>
      <button className="AR-button">
        <Link to={"http://127.0.0.1:3500"}>Go to Ar shop</Link>
      </button>
      <div className="gender-filter">
        <button onClick={() => setactiveButton("Men")}>Men</button>
        <button onClick={() => setactiveButton("Women")}>Women</button>
        <button onClick={() => setactiveButton("Children")}>Children</button>
      </div>
      <div className="container d-grid grid-cols-4">
        {props.items.map((item) => {
          {
            return (
              <>
                {activeButton == "Men" && item.Gender == "Men" && (
                  <Item
                    data={item}
                    val={val}
                    setVal={setVal}
                    cartItems={cartItems}
                    setCart={setCart}
                  />
                )}
                {activeButton == "Women" && item.Gender == "Women" && (
                  <Item
                    data={item}
                    val={val}
                    setVal={setVal}
                    cartItems={cartItems}
                    setCart={setCart}
                  />
                )}
                {activeButton == "Children" && item.Gender == "Children" && (
                  <Item
                    data={item}
                    val={val}
                    setVal={setVal}
                    cartItems={cartItems}
                    setCart={setCart}
                  />
                )}
              </>
            );
          }
        })}
      </div>
      <div>
        {/* CART BEGINS HERE */}
        {show && (
          <div
            className="w-full h-full bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Bag
                  </p>

                  {props.items.map((item) => {
                    return cartItems[item.id] > 0 ? (
                      <Cartitem data={item} />
                    ) : null;
                  })}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Summary
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          {props.items.map((item) => {
                            sum += cartItems[item.id] * item.price;
                          })}
                          ${sum}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          $30
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Tax
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          $35
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          ${sum + 65}
                        </p>
                      </div>
                      <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                        <Link to="/qrpage" cartItems={cartItems}>
                          Checkout
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </div>
  );
}
