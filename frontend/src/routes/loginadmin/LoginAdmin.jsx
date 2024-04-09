import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";
import apiFetchRequest from "../../utils/apiFetchRequest";
import { updateUserInfo } from '../../app/reducer/currentuser/currentuserSlice';
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import "../login/login.scss";

const LoginAdmin = () => {
    const [error, setError] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      const formData = new FormData(e.target);
  
      const username = formData.get("username");
      const password = formData.get("password");
  
      try {
        const res = await apiFetchRequest.post("/auth/admin/login", {
          username,
          password,
        });
        
        dispatch(updateUserInfo(res.data))
        enqueueSnackbar('Admin Login Successfully ',{ variant: 'success' });
        navigate("/");
      } catch (err) {
        setError(err.response.data.message);
        enqueueSnackbar('Oops! something went wrong',{ variant: 'error' });
      } finally {
        setIsLoading(false);
      }
    };
    return (
      <div className="login">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Welcome back our valuable Admin</h1>
            <input
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            <button disabled={isLoading}>Login as Admin</button>
            {error && <span>{error}</span>}
            <Link to="/admin/register">{"Don't"} you have an account?</Link>
          </form>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    );
  }

export default LoginAdmin