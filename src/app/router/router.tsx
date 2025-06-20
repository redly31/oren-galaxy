import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import ErrorPage from "../../pages/error/ErrorPage";

const GuidePage = lazy(() => import('../../pages/guide/GuidePage'));
const AboutPage = lazy(() => import('../../pages/about/AboutPage'));
const PhonePage = lazy(() => import('../../pages/phone/PhonePage'));
const CartPage = lazy(() => import('../../pages/cart/CartPage'));
const PaymentPage = lazy(() => import('../../pages/payment/PaymentPage'));
const SuccessPaymentPage = lazy(() => import('../../pages/success-payment/SuccessPaymentPage'));

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
        element: <GuidePage/>,
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
        path: "/payment",
        element: <PaymentPage />
      },
      {
        path: "/payment/success",
        element: <SuccessPaymentPage/>
      }
    ],
  },
]);
