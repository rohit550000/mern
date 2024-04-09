import "./layout.scss";
import Navbar from "../../components/navbar/Navbar"
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const currentUser = useSelector((state) => state.currentuser.data)
  return !currentUser || currentUser.role !== 'Admin' ? (<Navigate to="/" />) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
