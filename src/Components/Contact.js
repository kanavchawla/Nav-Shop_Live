import { useState } from "react";
import React from 'react'
import env from '../images/envelope.png'

export default function Contact() {
    const [first_name,setfirst_name]=useState();
  const [last_name,setlast_name]=useState();
  const [email,setemail]=useState();
  const [text,settext]=useState();
  const submit=()=>{
    setfirst_name("");
    setlast_name("");
    setemail("");
    settext("");
  }
  return (
    <>
    <div className='container my-4 text-center'>
      <h1 className='font-weight-bold'><strong>Contact Us</strong></h1>
    </div>
        <div className='container'  style={{height:"100vh",overflowY:'hidden'}}>
            <div className='row'>
                <div className='col-md-6'>
                  <img className="img-fluid mx-auto d-block" src={env}/>
                </div>
                <div className='col-md-6 my-auto'>
                  <div className='container d-flex flex-column my-4'>
                    <input type={'name'} value={first_name} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'First name'}></input>
                    <input type={'name'} value={last_name} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'Last name'}></input>
                    <input type={'email'} value={email} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'Email address'}></input>
                    <textarea class="my-2 form-control" value={text} placeholder={'Any Questions?'} style={{'height': '100px','font-size': 'large','padding': '10px','border-radius': '30px'}} rows="5"></textarea>
                  </div>
                    <button type="button" onClick={submit} class="btn btn-dark mx-auto d-block">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}
