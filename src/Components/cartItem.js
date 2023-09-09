import React from "react";
// import image from "../images/item.png";

export default function Cartitem(props) {
  return (
    <div className="md:flex  items-center py-8 border-t border-gray-200">
      <div className="w-1/4">
        <img
          src={props.data.Img}
          alt
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4 w-full">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
          ID:{props.data.id}
        </p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {props.data.name}
          </p>
          <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Gender: {props.data.Gender}
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">
          Color: {props.data.Colour}
        </p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            ${props.data.price}
          </p>
        </div>
      </div>
    </div>
  );
}
