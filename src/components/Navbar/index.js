import "./index.css";

import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";

const Navbar = () => {
  return (
    <ProSidebarProvider className="position">
      <h1>Dashboard</h1>
      <Menu>
        <MenuItem className="page">Home</MenuItem>
        <MenuItem className="page">CustomerDetails</MenuItem>
      </Menu>
    </ProSidebarProvider>
  );
};

export default Navbar;
