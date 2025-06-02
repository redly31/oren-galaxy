import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

export default function Providers() {
  return (
    <RouterProvider router={router}/>
  )
}
