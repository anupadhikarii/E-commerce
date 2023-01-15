import React from "react";
import "./card.css";
function Card(props) {
  return (
    <>
      <div
        onClick={() => {
          props.setProducts && props.setProducts(props.detail);
        }}
        className='card'
        key={props.id}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className='detail'>
          <div className='id'>{props.title}</div>
          <div className='prize-text'>${props.prize}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
