import React from 'react'
import apiFetchRequest from '../../../utils/apiFetchRequest';
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useSnackbar } from 'notistack';
import "./newPropertypage.scss";

const UpdateProperty = () => {
  const SinglePropertyData = useLoaderData();
  const [value, setValue] = useState(SinglePropertyData.desc);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiFetchRequest.put(`/property/${SinglePropertyData.id}`, {
        title: inputs.title,
        desc: value,
        price: parseInt(inputs.price),
        address: inputs.address,
        city: inputs.city,
        bedroom: parseInt(inputs.bedroom),
        bathroom: parseInt(inputs.bathroom),
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        property: inputs.property,
      });
      enqueueSnackbar('Property Updated successfully', { variant: 'success' });
      navigate("/list")
    } catch (err) {
      enqueueSnackbar('Oops!! something went wrong', { variant: 'error' });
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Update New Property</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" defaultValue={SinglePropertyData.title} />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" defaultValue={SinglePropertyData.price} />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" defaultValue={SinglePropertyData.address} />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" defaultValue={SinglePropertyData.city} />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" defaultValue={SinglePropertyData.bedroom} />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" defaultValue={SinglePropertyData.bathroom} />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" defaultValue={SinglePropertyData.latitude} />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" defaultValue={SinglePropertyData.longitude} />
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property" defaultValue={SinglePropertyData.property} >
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
    </div>
  );
}

export default UpdateProperty