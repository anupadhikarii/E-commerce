import React from "react";
import routes from "../../routing/routes";
import "./navBarStyles.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
function NavBar() {
  const [hamBurger, setHamBurger] = React.useState(false);
  return (
    <nav>
      <div className='NavBar'>
        <div className='commerceImage'>
          <NavLink to='./' style={{ textDecoration: "none" }}>
            <div>
              E<span>Shop</span>
            </div>
          </NavLink>
        </div>
        <div
          className={hamBurger ? "pages showham" : "pages"}
          onClick={(x) => hamBurger && setHamBurger((x) => !x)}
        >
          {routes.map((pages) => (
            <NavLink to={pages.path} style={{ textDecoration: "none" }}>
              {pages.name.toUpperCase()}
            </NavLink>
          ))}
        </div>
        <div className='nav-dropdown' onClick={(x) => setHamBurger((x) => !x)}>
          <RxHamburgerMenu />
        </div>
      </div>
      <div style={{ height: "70px" }}></div>
    </nav>
  );
}

export default NavBar;
