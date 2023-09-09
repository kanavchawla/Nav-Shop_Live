import React from 'react'
import { Link } from 'react-router-dom'
import '../fun.css'
export default function foodcourt() {
  return (
    <div>
        <div className="wrapper-food">
      <button className='food-order fun-buy'>Order</button>
      <button className='food-nav fun-buy'><Link to='/Navigation' style={{textDecoration : 'none','color':'black'}}>Navigate</Link></button>
      </div>

    </div>
  )
}
