import React, { useEffect, useState } from 'react'
import "./AdminDashboard.scss";
import apiFetchRequest from '../../utils/apiFetchRequest';

const AdminDashboard = () => {
  const [data, setData] = useState([])

  const FetchClients = async () => {
    try {
      await apiFetchRequest.get("/clientinfo/").then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchClients()
  }, [])
  console.log(data)
  return (
    <div className='clientContainer'>
      <h1>Our valuable Client</h1>
      {
        data.map((ele, index) => (
          <div className="client" key={index}>
            <h3>Username - {ele.username}</h3>
            <h3>Email - {ele.email}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default AdminDashboard