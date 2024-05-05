import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import apiFetchRequest from '../../../utils/apiFetchRequest';
import { useSnackbar } from 'notistack';
import "./newPropertypage.scss";

const DeleteProperty = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteProperty = async () => {
    setLoading(true);
    try {
      const res = await apiFetchRequest.delete(`/property/${id}`)
      setLoading(false);
      enqueueSnackbar('Property Deleted successfully', { variant: 'success' });
      navigate("/admindashboard");
    } catch (err) {
      setLoading(false);
      enqueueSnackbar('Oops! something went wrong ', { variant: 'error' });
    }
  };
  return (
    <div className='deleteContainer'>
      {loading ? 'Loding..' : ''}
      <h1>Delete Property</h1>
      <div className='deleteContent'>
        <h3>Are You Sure You want to delete this Property?</h3>

        <button onClick={handleDeleteProperty} className='deleteit'>
          Yes, Delete it
        </button>
        <Link to={"/admindashboard"}>
          <button className='deleteno'>
            No
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DeleteProperty