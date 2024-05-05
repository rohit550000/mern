import "./layout.scss";
import Navbar from "../../components/navbar/Navbar"
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import SideBar from "../../components/sideBar/SideBar";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const currentUser = useSelector((state) => state.currentuser.data)
  return !currentUser || currentUser.role !== 'Admin' ? (<Navigate to="/" />) : (
    <div className="layouttwo">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
