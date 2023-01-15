import Home from "../pages/Home"
import Product from "../pages/Product"
import Contact from "../pages/Contact"
import About from "../pages/About"
const routes = [
    {
        element: <Home/>,
        path: "/",
        name: "Home"
    },
        {
        element: <About/>,
        path: "/about",
        name: "About"
    },
        {
        element: <Product/>,
        path: "/product",
        name: "Products"
    },
        {
        element: <Contact/>,
        path: "/contact",
        name: "Contact"
    }
]
export default routes;