import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import apiFetchRequest from "../../utils/apiFetchRequest";
import { logout } from "../../app/reducer/currentuser/currentuserSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';

function Navbar() {
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
      } else {
        await apiFetchRequest.post("/auth/logout");
        dispatch(logout())
        enqueueSnackbar('Client logout Successfully ', { variant: 'success' });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(currentUser)

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/weblogo.png" alt="" />
        </a>
        <a href="/">Home</a>
        {
          currentUser?.role == "Admin" ? (
            <a href="/list">PropertyList</a>
          ) : (<a href="/">About</a>)
        }
        {
          currentUser?.role == "Admin" ? (
            <a href="/admindashboard">View Client</a>
          ) : ('')
        }

      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <span>{currentUser.username + ` ${currentUser.role == 'Admin' ? "Admin" : "Client"} `}</span>
            <a className="logout">
              <button onClick={handleLogout} style={{ cursor: "pointer" }}> logout</button>
            </a>
          </div>
        ) : (
          <>
            <a href="/register" className="register">Sign as Client</a>
            <a href="/admin/register" className="register">
              Sign as Admin
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
