/** @format */

import React from "react";
import "./aboutBoard.css";

function AboutBoard() {
  return (
    <div>
      <div className='about-board'>
        <div className='board-container'>
          <div className='board-describtion'>
            <div className='board-title'>We are Future....</div>
            <div className='board-description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium commodi cupiditate perspiciatis asperiores harum.
              Impedit possimus magni doloribus pariatur incidunt. Inventore
              eligendi quibusdam pariatur cum temporibus ipsa tempore tempora
              error.
            </div>
            <div className='board-btn'>
              <button> Learn more</button>
            </div>
          </div>
          <div className='board-image'>
            <img
              src='https://wpthemesgrid.com/themes/free/eshop/images/blog2.jpg'
              alt='boardimage'
            />
            <div className='bg'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBoard;
