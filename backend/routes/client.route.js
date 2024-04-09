import express from "express"
import { getClientList,getSingleClient,deleteClient } from "../controllers/client.crud.controller.js";
const routerClient = express.Router();

routerClient.get("/", getClientList);
routerClient.get("/:id",getSingleClient);
routerClient.delete("/:id",deleteClient);

export default routerClient