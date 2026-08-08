import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayouts";
import { HomePage } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
