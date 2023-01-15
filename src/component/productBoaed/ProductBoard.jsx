import React from "react";
import ItemBoard from "./itemBoard/ItemBoard";
import ProductLine from "./productLine/ProductLine";
import Card from "../card/Card";
import product from "../card/tendingproduct";
import { useEffect } from "react";
import "./productBoard.css";
function ProductBoard() {
  const [products, setProducts] = React.useState([]);

  const [item, setItem] = React.useState({});

  useEffect(() => {
    setProducts(product);
    setItem(product[0]);
  }, []);

  return (
    <>
      <div className='productBoard'>
        <ItemBoard item={item} />
        <ProductLine />
        <div className='product-item' onClick={() => window.scrollTo(0, 0)}>
          {products.map((detail, key) => (
            <Card
              detail={detail}
              image={detail.itemImage}
              id={detail.id}
              prize={detail.prize}
              setProducts={setItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductBoard;
