import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import PhonePage from "../../pages/phone/PhonePage";
import GuidePage from "../../pages/guide/GuidePage";
import AboutPage from "../../pages/about/AboutPage";
import ErrorPage from "../../pages/error/ErrorPage";
import CartPage from "../../pages/cart/CartPage";
import AdminPage from "../../pages/admin/AdminPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/phones/:id",
        element: <PhonePage />,
      },
      {
        path: "/guide",
        element: <GuidePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />
      }
    ],
  },
]);
