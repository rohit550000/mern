import { Link } from "react-router-dom";
import "./card.scss";
import { useSelector } from "react-redux";

function Card({ item, currentpath }) {
  const currentUser = useSelector((state) => state.currentuser.data);

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        {currentUser && currentUser.role == "Admin" && currentpath == 'admindashboard' ? (
          <div className="icons">
            <Link to={`/${item.id}`}>
              <button className="iconOne">view</button>
            </Link>
            <Link to={`/admin/update/${item.id}`}>
              <button className="iconTwo">Update</button>
            </Link>
            <Link to={`/admin/delete/${item.id}`}>
              <button className="iconThree">Delete</button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>
            <b>{item.address}</b>
          </span>
        </p>
        <p className="price"> ₹ {item.price} Lac</p>
        <div className="bottom" style={{ display: currentUser && currentUser.role == "Admin" && currentpath == 'admindashboard' ? 'none' : '' }}>
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
