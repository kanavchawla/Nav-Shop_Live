import React from 'react'
import Item from './games-props'
import './login.css'

export default function BuyGameTickets(props) {
  return (
    <>
    <div className='funbg'>
      <div className='container d-flex'>
      {props.items.map((item)=>{
        return(
        <>
        <Item data={item}/>
        </>
        )
      })}
      </div>
    </div>
    </>
  )
}