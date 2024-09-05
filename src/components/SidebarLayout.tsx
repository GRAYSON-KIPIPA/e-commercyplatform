import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const SidebarLayout = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
