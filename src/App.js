import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import ARShop from "./Components/ARShop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/home";
import Option from "./Components/option";
import Funzone from "./Components/funzone";
import Foodcourt from "./Components/foodcourt";
import ShopOptions from "./Components/shop-options";
import QRPage from "./Components/qr-page";
import LoginCard from "./Components/LoginCard";
import Landing from "./Components/Landing";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuyGameTickets from "./Components/buy-game-tickets";

function App() {
  const list = [
    {
      id: 1,
      name: "Basic Tee",
      price: "100",
      Gender: "Men",
      Colour: "Black",
      Img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 2,
      name: "Shirt",
      price: "200",
      Gender: "Women",
      Colour: "Black",
      Img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: "300",
      Gender: "Men",
      Colour: "Grey",
      Img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    },
    {
      id: 4,
      name: "Artwork Tee",
      price: "300",
      Gender: "Women",
      Colour: "Light Brown",
      Img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    },
    {
      id: 5,
      name: "Linework Artwork Tee",
      price: "300",
      Gender: "Children",
      Colour: "Blue,White,Grey",
      Img: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
    },
    {
      id: 6,
      name: "T-Shirt",
      price: "100",
      Gender: "Men",
      Colour: "Green,Yellow",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f1.jpg?raw=true",
    },
    {
      id: 7,
      name: "T-Shirt",
      price: "120",
      Gender: "Men",
      Colour: "Cream",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f2.jpg?raw=true",
    },
    {
      id: 8,
      name: "T-Shirt",
      price: "300",
      Gender: "Men",
      Colour: "Orange,Blue",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f6.jpg?raw=true",
    },
    {
      id: 9,
      name: "Cat Top",
      price: "200",
      Gender: "Women",
      Colour: "Grey",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f8.jpg?raw=true",
    },
    {
      id: 10,
      name: "Shirt",
      price: "100",
      Gender: "Children",
      Colour: "Green",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n4.jpg?raw=true",
    },
    {
      id: 11,
      name: "Denim Shirt",
      price: "400",
      Gender: "Children",
      Colour: "Green",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n5.jpg?raw=true",
    },
    {
      id: 12,
      name: "Pants",
      price: "100",
      Gender: "Children",
      Colour: "Grey",
      Img: "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n6.jpg?raw=true",
    },
  ];
  const games = [
    {
      id: 1,
      name: "bowling",
      price: "100/20shots",
    },
    {
      id: 2,
      name: "air hockey",
      price: "100 for 30mins",
    },
    {
      id: 3,
      name: "snooker",
      price: "200 for 30mins",
    },
  ];
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Landing />}></Route>
          <Route exact path="" element={<Landing></Landing>}></Route>
          <Route exact path="/mallcode" element={<Home />}></Route>
          <Route exact path="/navigation" element={<Navigation />}></Route>
          <Route exact path="/arshop" element={<ARShop items={list} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/option" element={<Option />}></Route>
          <Route exact path="/funzone" element={<Funzone />}></Route>
          <Route exact path="/foodcourt" element={<Foodcourt />}></Route>
          <Route exact path="/qrpage" element={<QRPage />}></Route>
          <Route
            exact
            path="/buy-game-tickets"
            element={<BuyGameTickets items={games} />}
          ></Route>
          <Route exact path="/shop-options" element={<ShopOptions />}></Route>
          <Route exact path="/qr-page" element={<QRPage />}></Route>
          <Route exact path="/map"></Route>
          <Route exact path="/LoginCard" element={<LoginCard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
