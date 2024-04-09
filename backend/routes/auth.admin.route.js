import express from "express";
import { adminregister,adminlogin,adminlogout } from "../controllers/auth.admin.controller.js";

const routerAdminAuth = express.Router();

routerAdminAuth.post("/register", adminregister);
routerAdminAuth.post("/login",adminlogin);
routerAdminAuth.post("/logout",adminlogout);

export default routerAdminAuth;