import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { useNavigate } from "react-router-dom";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';

function SinglePage() {
  const SinglePropertyData = useLoaderData();
  const { enqueueSnackbar } = useSnackbar();
  const [intrest, setIntrest] = useState('Show intrest')
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.currentuser.data)

  const handIntrest = () => {
    if (!currentUser) {
      enqueueSnackbar('Oops! Please Register First ', { variant: 'error' });
      navigate("/register")
    }
  }

  useEffect(() => {
    !currentUser ? setIntrest('show intrest') : setIntrest('Intrested')
  }, [currentUser])

  return (

    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={SinglePropertyData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{SinglePropertyData.title}</h1>
                <div className="address">
                  <div className="one">
                    <img src="/pin.png" alt="" />
                    <span>{SinglePropertyData.address}</span>
                  </div>
                  <div className="two">
                    <img src="/bath.png" alt="" />
                    <span>{SinglePropertyData.bathroom} bathroom</span>
                  </div>
                </div>
                <div className="other">
                  <div className="price">{SinglePropertyData.price} Lac</div>
                  <div className="other2">
                    <img src="/bed.png" alt="" />
                    <span>{SinglePropertyData.bedroom} bedroom</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(SinglePropertyData.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div className="mapContainer">
            <Map items={[SinglePropertyData]} />
          </div>
          <div className="intrestimage">
            <img src="/intrest.png" alt="" />
          </div>
          <div className="intrest">
            <button onClick={() => handIntrest()}>{intrest}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
