import express from "express";
import routerProperty from "./routes/property.route.js";
import routerAuth from "./routes/auth.route.js";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";
import routerTest from "./routes/test.route.js";
import routerAdminAuth from "./routes/auth.admin.route.js";
import routerClient from "./routes/client.route.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = process.env.PORT || 5000;
const mongoDBURL = process.env.DATABASE_URL;
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));


app.use("/api/clientinfo",routerClient)
app.use("/api/property",routerProperty)
app.use("/api/auth",routerAuth)//user router /api/auth/register
app.use("/api/auth/admin",routerAdminAuth) //admin route /api/auth/admin/register
app.use("/api/test",routerTest)


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('database connected Successfully');
    app.listen(port, () => {
      console.log(`App is listening to port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

