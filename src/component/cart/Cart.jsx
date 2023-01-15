import React, { useEffect, useContext } from "react";
import "./cart.css";
import { MdOutlineDeleteSweep } from "react-icons/md";
import product from "../card/tendingproduct";
import { cartAdded } from "../../routing/RouterPage";
function Cart() {
  const cartAdd = useContext(cartAdded);
  const [cartLocalItem, setCartlocalItem] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState(0);

  const removeFromCart = (itemId) => {
    try {
      const res = localStorage.getItem("Cart");
      const datas = JSON.parse(res);

      if (!res || datas.length === 0) return;

      const index = datas.indexOf(itemId);
      datas.splice(index, 1);
      localStorage.setItem("Cart", JSON.stringify(datas));
      console.log(datas);
      fetchFirst();
      cartAdd.setAddedCart((x) => (x = x - 1));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFirst = () => {
    let totalItemAmount = 0;
    const returnCartDetail = (itemID) => {
      const itemTorender = product.filter((product) => {
        return product.itemid === itemID;
      });
      return itemTorender[0];
    };
    const dataItem = localStorage.getItem("Cart");
    const dataItems = JSON.parse(dataItem);
    if (!dataItem || dataItems.length === 0) {
      setCartlocalItem([]);
      return;
    }

    let itemdetails = [];
    for (let i = 0; i < dataItems.length; i++) {
      let returnData = returnCartDetail(dataItems[i]);
      itemdetails.push(returnData);
      console.log(returnData.prize);
      totalItemAmount = totalItemAmount + returnData.prize;
    }
    setTotalAmount(totalItemAmount);
    setCartlocalItem(itemdetails);
  };

  useEffect(() => {
    fetchFirst();
  }, []);
  return (
    <>
      <div className='cart'>
        <div className='cart_table'>
          {cartLocalItem.length > 0 ? (
            <table>
              <tr className='topics'>
                <th>Product</th>
                <th>Name</th>
                <th>unit Prize</th>
                <th>Catagory</th>
                <th>Quality</th>
                <th>Total</th>

                <th>
                  <MdOutlineDeleteSweep size={"18%"} />
                </th>
              </tr>

              {cartLocalItem.map((item) => (
                <tr>
                  <td>
                    <div className='product_image'>
                      <img src={item.itemImage} alt='Loading...' />
                    </div>
                  </td>
                  <td>
                    <div className='product_name'>
                      <h2>{item.title}</h2>
                      <p>{item.describtion.substring(0, 100)}</p>
                    </div>
                  </td>
                  <td>${item.prize}</td>
                  <td>{item.catagory}</td>
                  <td>{item.ratting}/5</td>
                  <td>${item.prize}</td>
                  <td
                    onClick={() => removeFromCart(item.itemid)}
                    className='delete-button'
                  >
                    <MdOutlineDeleteSweep size={"30%"} />
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <h1>Cart is Empty</h1>
          )}
        </div>
        {cartLocalItem.length > 0 && (
          <div className='product-detail'>
            <div className='left_cart_footer'>
              <input
                type='text'
                className='enter_coupen'
                placeholder='Enter the Coupun'
              />
              <button className='apply_coupen'>
                <span>Apply</span>{" "}
              </button>
            </div>
            <div className='right_cart_footer'>
              <div className='Cart_Subtotal'>
                <span>Cart Subtotal</span>
                <span>${totalAmount}</span>
              </div>
              <div className='Cart_shipping'>
                <span>shipping</span>
                <span>free</span>
              </div>
              <hr />

              <div className='Cart_total'>
                <span>You pay</span>
                <span>${totalAmount}</span>
              </div>
              <button className='checkout'>checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
