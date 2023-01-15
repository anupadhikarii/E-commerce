import React from "react";
import "./homeBoard.css";
import { BiWallet, BiStar, BiRocket } from "react-icons/bi";
function HomeBoard() {
  return (
    <div className='container'>
      <div className='Image-gallary'></div>
      <div className='smallboard'>
        <div className='leftbox'>
          <BiWallet size='50px' />
          <span> fast secure payment</span>
        </div>
        <div className='middlebox'>
          <BiStar size='50px' />
          <span>premium products</span>
        </div>
        <div className='righttbox'>
          <BiRocket size='50px' />
          <span>Free and fast delivery</span>
        </div>
      </div>
    </div>
  );
}

export default HomeBoard;
