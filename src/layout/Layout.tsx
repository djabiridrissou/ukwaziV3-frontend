import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (

    <div style={{
      display: 'flex',
      width: '100%',
    }}>
      <div className="">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: sidebarOpen ? '240px' : '120px',
        overflowX: 'hidden',
        marginTop: '20px',
        marginRight: '8px',
        overflowY: 'auto',
      }}>
        <div className="">
          {/*  <Navbar /> */}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
