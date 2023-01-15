import React from 'react'
import UpperFooter from './upperFooter/upperFooter'
import './footer.css'
function Footer() {
  return (
    <>
      <div className="footer">
         <div className="footer-main">
            <div className="footer-information">
                <UpperFooter/>
            </div>
            <div className='footer-buttom'>
            <hr className='footer--buttom-line'/>
            <div className="footer-buttom-buttom">
                <div className="footer-buttom-left">Copyright © 2020 Wpthemesgrid - All Rights Reserved.</div>
                <>cards</>
            </div>
         </div>
            </div>
          
      </div>
    </>
  )
}

export default Footer
