import React, { useEffect, useState } from 'react'
import "./AdminDashboard.scss";
import apiFetchRequest from '../../utils/apiFetchRequest';
import { MdAttachEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

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
          <ul className="clients" key={index}>
            <li>
              <div className="username">
               <FaUserTie />
                <span>{ele.username}</span>
              </div>
              <div className="email">
              <MdAttachEmail />
              <span>{ele.email}</span>
              </div>
            </li>
          </ul>
        ))
      }
    </div>
  );
}

export default AdminDashboard