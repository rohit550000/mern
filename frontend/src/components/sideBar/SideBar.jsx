import React from 'react'
import "./sideBar.scss";
import { MdOutlineManageHistory } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdChangeCircle } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import apiFetchRequest from '../../utils/apiFetchRequest';
import { useSnackbar } from 'notistack';
import { logout } from '../../app/reducer/currentuser/currentuserSlice';

const SideBar = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useSelector((state) => state.currentuser.data)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      if (currentUser?.role == 'Admin') {
        await apiFetchRequest.post("/auth/admin/logout")
        dispatch(logout())
        enqueueSnackbar('Admin logout Successfully ', { variant: 'success' });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return <>
    <div className="sidebar">
      <div className="content">

        <div className="userDetails">
          <h1>{currentUser.username.toLowerCase()}</h1>
          <sup>admin</sup>
        </div>
        <hr />
        <ul className="menuContainer">
          <Link to="/admindashboard">
            <li>
              <MdOutlineManageHistory />
              <span>Manage property</span>
            </li>
          </Link>

          <Link to="/clients">
            <li>
              <PiUserListFill />
              <span>Client list</span>
            </li>
          </Link>

          <Link to="/list">
            <li>
              <MdChangeCircle />
              <span>Client Side</span>
            </li>
          </Link>


          <li className='lastElement' onClick={handleLogout}>
            <RiLogoutCircleRFill />
            <span>Logout</span>
          </li>

        </ul>
      </div>
    </div>
  </>
}

export default SideBar