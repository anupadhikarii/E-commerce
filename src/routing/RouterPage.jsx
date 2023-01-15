import React from "react";
import NavBar from "../component/navBar/NavBar";
import Footer from "../component/footer/Footer";
import Cart from "../component/cart/Cart";
import StickyBoard from "../component/sticky/StickyBoard";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { createContext } from "react";

const cartAdded = createContext();
function Router() {
  const [openCart, setOpenCart] = React.useState(false);
  const [addedCart, setAddedCart] = React.useState(0);
  const value = { addedCart, setAddedCart };
  return (
    <>
      <cartAdded.Provider value={value}>
        <StickyBoard setOpenCart={setOpenCart} openCart={openCart} />

        <div
          className={openCart && "whole_website"}
          onClick={() => openCart && setOpenCart((x) => !x)}
        >
          <NavBar />

          <Routes>
            {routes.map((pages) => (
              <Route exact path={pages.path} element={pages.element} />
            ))}
          </Routes>

          <Footer />
        </div>
        {openCart && <Cart />}
      </cartAdded.Provider>
    </>
  );
}

export default Router;
export { cartAdded };
