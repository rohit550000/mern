import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiFetchRequest from "../../utils/apiFetchRequest";
import { useSnackbar } from 'notistack';
import "../register/register.scss";

const RegisterAdmin = () => {
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiFetchRequest.post("/auth/admin/register", {
        username,
        email,
        password,
      });
      enqueueSnackbar('Admin Register Successfully ', { variant: 'success' });
      navigate("/admin/login");
    } catch (err) {
      setError(err.response.data.message);
      enqueueSnackbar('Oops! something went wrong', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Admin Account</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button disabled={isLoading}>Register as Admin</button>
          {error && <span>{error}</span>}
          <Link to="/admin/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default RegisterAdmin