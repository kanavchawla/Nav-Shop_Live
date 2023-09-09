import React from 'react'
import '../fun.css'
import { Link } from 'react-router-dom'
import '../images/bg.jpg'
function funzone() {
  return (
    <div className='funbg' >
        <div className="wrapper-fun">
      <button className='fun-buy'><Link to='/buy-game-tickets' style={{textDecoration : 'none','color':'black'}}>Buy Tickets</Link></button>
      <button className='fun-nav'><Link to='/Navigation' style={{textDecoration : 'none','color':'black'}}>Navigate</Link></button>
      </div>

    </div>
  )
}

export default funzone
