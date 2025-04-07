import { Layout } from "antd";
import { Menu } from "antd";
const { Sider } = Layout;
import { BsArrowLeftShort } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogoutOutlined } from '@ant-design/icons';

const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const handleOpenChange = (keys: any) => {
    setOpenKeys(keys.slice(-1)); // Keep only the last opened submenu key
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarOpen]);

  return (
    <Layout
      className={`fixed top-0 left-0 bottom-0 z-50 bg-[#1A1C4B] h-screen shadow-xl  transition duration-500`}
    >
      <BsArrowLeftShort
        className={`bg-gray-900 text-white text-lg rounded-full absolute -right-2 z-20 top-8 border border-white cursor-pointer ${!sidebarOpen && "rotate-180"
          }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sider
        collapsed={!sidebarOpen}
        collapsible
        trigger={null}
        className="custom-sider"
      >
        {sidebarOpen && (
          <div className="flex items-center mt-4 justify-center">
            <span className="text-[30px] text-white font-bold overflow-x-hidden">CMPJ</span>
            <span className="bg-white h-2 w-2 rounded-full ml-1"></span>
          </div>
        )}

        <Menu
          theme="dark"
          mode="inline"
          className="sidebar flex flex-col gap-2"
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        >
          {/* Dashboard */}
          <Menu.Item key="dashboard" icon={<IoMdHome size={17} />}>
            <Link to={"/home"}>Tableau de Bord</Link>
          </Menu.Item>

          {/* sections */}
          {/* <Menu.SubMenu
            key="sections"
            icon={<FaLandmarkFlag size={17} />}
            title="Sections"
          >
          </Menu.SubMenu> */}
        </Menu>
      </Sider>
      <div className="absolute bottom-1 items-center justify-center flex my-4 w-full mx-0 md:mx-auto ">
        <button onClick={() => navigate("/")} className="flex gap-2 jsutify-center items-center text-white text-[10px] md:text-[12px] font-bold">
          {sidebarOpen && (
            <span className="hover:text-gray-300">Déconnexion</span>
          )}
          <LogoutOutlined />
        </button>
      </div>
    </Layout>
  );
};

export default Sidebar;
