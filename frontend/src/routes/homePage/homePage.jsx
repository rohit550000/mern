import { useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { useLocation } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">

      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Ideal Home with Real Estate Experts</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit! fugit quos laudantium temporibus dolor ea
            repellat provident impedit!fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>320</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>32+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>2300+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
