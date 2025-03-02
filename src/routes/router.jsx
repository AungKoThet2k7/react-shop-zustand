import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import Mainlayout from "../components/Mainlayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },

      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productSlug",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
