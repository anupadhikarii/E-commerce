import React from "react";
import "./contactBox.css";
function ContactBox() {
  return (
    <>
      <div className='contact_box'>
        <div className='contact-information'>
          <h3>Write us a message</h3>
          <div className='name'>
            <p>Your Name</p>
            <input type='text' className='yourname' />
          </div>
          <div className='email'>
            <p>Your email</p>
            <input type='email' className='youremail' />
          </div>
          <div className='message'>
            <p>Message</p>
            <textarea className='yourmessage' />
          </div>
          <button className='Send'>send</button>
        </div>
      </div>
    </>
  );
}

export default ContactBox;
