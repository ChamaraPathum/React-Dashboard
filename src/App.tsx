import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";

function App() {
  const LayOut = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="containor">
          <div className="menuContainor">
            <Menu />
          </div>
          <div className="contentContainor">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
