import QRCode from "react-qr-code";
import React from "react";
import { Cart } from "../Context/cart";
import { useContext } from "react";
import "../Components/qr.css";
import "./login.css";

export default function QRPage() {
  const { cartItems, setCart } = useContext(Cart);
  console.log(cartItems);
  let url =
    "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=http://localhost:3000/home";

  return (
    <div className="funbg">
      <iframe src={url}></iframe>
      <QRCode
        className="qr"
        title="title"
        value={"http://localhost:3000/qr-page"}
        bgColor="white"
        fgcolor="black"
        // level="level"
        size={300}
      />
    </div>
  );
}
