import express from "express"
import { getPropertyList,getSingleProperty,addNewProperty,updateProperty,deleteProperty } from "../controllers/property.controller.js";
const routerProperty = express.Router();

routerProperty.get("/", getPropertyList);
routerProperty.get("/:id", getSingleProperty);
routerProperty.post("/", addNewProperty);
routerProperty.put("/:id", updateProperty);
routerProperty.delete("/:id", deleteProperty);

export default routerProperty