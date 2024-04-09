import express from "express";
import { register,login,logout } from "../controllers/auth.controller.js";

const routerAuth = express.Router();

routerAuth.post("/register", register);
routerAuth.post("/login", login);
routerAuth.post("/logout", logout);

export default routerAuth;
