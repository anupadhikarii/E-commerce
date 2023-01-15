import React from "react";
import "./ItemBoard.css";
import { CiStar } from "react-icons/ci";
import { GoCalendar } from "react-icons/go";
import { useContext } from "react";
import { cartAdded } from "../../../routing/RouterPage";
function ItemBoard({ item }) {
  const cartAdd = useContext(cartAdded);

  const setToBookmarks = () => {
    console.log(item);
    const res = localStorage.getItem("Cart");
    let datas = JSON.parse(res);

    cartAdd.setAddedCart((x) => x + 1);
    console.log(cartAdd.addedCart);
    if (!res || datas.length === 0) {
      console.log(item.id);
      localStorage.setItem("Cart", JSON.stringify([item.itemid]));
      return;
    }

    datas.push(item.itemid);

    localStorage.setItem("Cart", JSON.stringify(datas));
  };

  return (
    <>
      <div className='product-detail'>
        <div className='sub_class'>
          <div className='product-image'>
            <img src={item.itemImage} alt='images' />
          </div>
          <div className='product-information'>
            <div className='product-title'> {item.title}</div>
            <div className='product-ratting'>
              <div className='product-star'>
                <CiStar />
                {item.ratting}/5
              </div>
              <div className='product-date'>
                <GoCalendar />
                {item.date}
              </div>
            </div>
            <div className='product-describtion'>{item.describtion}</div>
            <button className='add-to-card' onClick={() => setToBookmarks()}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemBoard;
