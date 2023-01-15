import React from 'react'
import './purchase.css'
function Purchase() {
  return (
    <div>
        <div className="box">
            <span className="first-text">
            Eshop Free Lite Version
            </span>
            <h1 className="secound-text">
            Currently You Are Using Free
                Lite Version Of Eshop.
            </h1>
            <hr className='line'/>
            <span className="third-text">
            Please, purchase full version of the template to get all pages,
            features and commercial license.
            </span>
            <button className="purchase-btn">Purchase Now</button>
 
        </div>
    </div>
  )
}

export default Purchase
