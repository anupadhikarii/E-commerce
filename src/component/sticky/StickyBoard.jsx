import React, { useEffect } from "react";
import "./stickyBoard.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { cartAdded } from "../../routing/RouterPage";
function StickyBoard(props) {
  const [numberOfCartItem, setNumberOfCartItem] = React.useState();
  const cartAdd = useContext(cartAdded);
  useEffect(() => {
    const data = localStorage.getItem("Cart");
    const datas = JSON.parse(data);
    if (!datas || datas.length === 0) setNumberOfCartItem(0);
    else setNumberOfCartItem(datas.length);
  }, [cartAdd.addedCart]);
  return (
    <div
      className='stickyBoard'
      onClick={() => props.setOpenCart(!props.openCart)}
    >
      <FaCartArrowDown />
      <div className='number_of_added_cart'>{numberOfCartItem}</div>
    </div>
  );
}

export default StickyBoard;
