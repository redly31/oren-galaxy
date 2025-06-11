import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/Header";

export default function Layout() {
  return (
    <>
      <Header/>
      <main className="px-4 pb-4">
        <Outlet />
      </main>
    </>
  )
}
