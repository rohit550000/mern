import React from 'react'
import "./newPropertypage.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiFetchRequest from '../../../utils/apiFetchRequest';
import UploadMedia from '../../../uploadMedia/UploadMedia';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

const CreateNewProperty = () => {
  const [value, setValue] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiFetchRequest.post("/property", {
        title: inputs.title,
        desc: value,
        price: parseInt(inputs.price),
        images: images,
        address: inputs.address,
        city: inputs.city,
        bedroom: parseInt(inputs.bedroom),
        bathroom: parseInt(inputs.bathroom),
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        property: inputs.property,
      });
      enqueueSnackbar('New Property Created Successfully ', { variant: 'success' });
      navigate("/admindashboard")
    } catch (err) {
      enqueueSnackbar('Oops! something went wrong', { variant: 'error' });
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Property</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" placeholder='eg. 21.1458' />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" placeholder='eg. 70.1458' />
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="bungalow">Bungalow</option>
                <option value="land">Land</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
              </select>
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadMedia
          uwConfig={{
            multiple: true,
            cloudName: "dcb6xfzum",
            uploadPreset: "realstate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default CreateNewProperty