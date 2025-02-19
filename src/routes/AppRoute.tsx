import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Login from "../pages/Login";
import DashboardUser from "../pages/DashboardUser";
import DashboardUserDetails from "../pages/DashboardUserDetails";

const AppRoute = () => {
  const AppLayout = () => {
    return (
      <div className="flex flex-col">
        <NavBar />
        <div className="sm:flex">
          <SideBar />
          <Outlet />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard/users" element={<DashboardUser />} />
        <Route path="/dashboard/users/:id" element={<DashboardUserDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
