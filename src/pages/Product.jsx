import React from "react";
import ProductBoard from "../component/productBoaed/ProductBoard";
function Product() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <ProductBoard />
    </>
  );
}

export default Product;
