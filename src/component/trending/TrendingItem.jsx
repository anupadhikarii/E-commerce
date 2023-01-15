/** @format */

import React, { useState } from "react";
import "./trendingItem.css";
import product from "../card/tendingproduct";
import Card from "../card/Card";
const miniNavContent = [
  {
    catagory: "MAN",
    productid: 1,
  },
  {
    catagory: "WOMAN",
    productid: 2,
  },
  {
    catagory: "KID",
    productid: 3,
  },
  {
    catagory: "ESSENTIAL",
    productid: 4,
  },
  {
    catagory: "ALL",
    productid: 5,
  },
];

function TrendingItem() {
  const [id, setId] = React.useState(4);
  const [products, setProducts] = useState(product);
  const showProduct = (catagoryToShow, index) => {
    setId(index);
    if (catagoryToShow === "ALL") {
      setProducts(product);
      return;
    }
    const result = product.filter((listOfProduct) => {
      return listOfProduct.catagory === catagoryToShow;
    });
    setProducts(result);
  };
  return (
    <>
      <div className='trendingitem'>
        <div className='titile'>Trending item</div>
        <div className='miniNav'>
          {miniNavContent.map((content, index) => (
            <div
              key={content.productid}
              onClick={() => showProduct(content.catagory, index)}
              className={
                id === index
                  ? "mini-nav-content active-mini-nav"
                  : "mini-nav-content"
              }
            >
              {content.catagory}
            </div>
          ))}
        </div>
        <div className='product'>
          {products.map((item) => {
            return (
              <div className='itemImage'>
                <Card
                  image={item.itemImage}
                  id={item.itemid}
                  prize={item.prize}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TrendingItem;
