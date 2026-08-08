import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
