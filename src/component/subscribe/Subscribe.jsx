import React from 'react'
import './subscribe.css'
function Subscribe() {
  return (
    <>
      <div className="subscribe-board">
        <div className="board-content">
            <div className='desc'>
            <span className="subscribe-title">SubScribe</span>
            <p className='subscribe-desc'>Subscribe to our Notification and get <span style={{
                color: '#ea9b4d'
            }}>10% </span>off your first purchase
</p>
            </div>

            <di2v className='subscribe-inputfield'>
                <input type="email" className="subscribe-input" placeholder='Your email address' ></input>
                <button className='subscribe-btn' > Subscribe</button>
            </di2v>
        </div>
      </div>
    </>
  )
}

export default Subscribe
