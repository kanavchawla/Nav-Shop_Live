import React from 'react'
import { Route } from 'react-router'
import {
  BrowserRouter as Router,
  Routes,
  Link
} from "react-router-dom";
import './login.css'
// import '../Components/nav.css'

export default function Navigation(){
    return (
      <>
      <div className="bg ">
      <div className='container mx-4 my-3 navcss' style={{'height':'90vh','width':'100vw'}}>
        <iframe className="rounded-xl" id="serviceFrameSend" src="https://api.mazemap.com/js/v2.0.94/docs/examples/iframe-fiddles/basic-kiosk-solution/app.html" width="1450" height="600"  frameborder="0"/>
        </div>
        </div>
        <style>
          {`body{
           overflow:hidden; 
          }`}
        </style>
    </>
    );
  }

