import React from 'react'
import './upperFooter.css'
const footerInformations =[
    {
        title:"information",
        content:[
            {
                title: "About us",
            },
            {
                title: "FaQ",
            },
            {
                title: "Term & condition",
            },
            {
                title: "Contact us",
            },
            {
                title: "Help",
            },
        ] 
    },
    {
        title:"Customer Service",
        content:[
            {
                title: "Payment Methods",
            },
            {
                title: "Money-back",
            },
            {
                title: "Returns",
            },
            {
                title: "Shipping",
            },
            {
                title: "Privacy Policy",
            },
        ] 
    }
]
function UpperFooter() {
  return (
    <>
      <div className='footer-leftPart'>
            <h1 className='footer-commerse'>E-commerse</h1>
            <p className='footer-paragraph1'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, magna eros eu erat. Aliquam erat volutpat.  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            <p className='footer-paragraph2'>Got Question? Call us 24/7</p>
            <h3 className='footer-number'>+0123 456 789</h3>
      </div>
      <div className='footer-middlePart'>
            {footerInformations.map((data)=>(
                <div className='footer-card'>
                <div className="footer-title">{data.title}</div>
                <div className="footer-catagory">
                {data.content.map((content)=>(
                        <div className='footer-content'>
                            {content.title}
                        </div>
                ))}
                </div>
                </div>
            ))}
      </div>
           <div className='footer-card2'>
                <div className="footer-title">Get In Touch</div>
                <div className="footer-catagory">
                        <div className='footer-right-content'>
                        NO. 342 - London Oxford Street.
                        </div>
                        <div className='footer-right-content'>
                        012 United Kingdom.
                        </div>
                        <div className='footer-right-content'>
                        info@eshop.com
                        </div>
                        <div className='footer-right-content'>
                        +032 3456 7890
                        </div>
                        
                        </div>  </div>
      

    </>
  )
}

export default UpperFooter