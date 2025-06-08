import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import PhonePage from "../../pages/phone/PhonePage";

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
      }
    ],
  },
]);
