import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken} from "../middleware/verifyToken.js";
import { verifyAdminToken } from "../middleware/verifyAdminToken.js";


const routerTest = express.Router();

routerTest.get("/should-be-client", verifyToken, shouldBeLoggedIn);

routerTest.get("/should-be-admin", verifyAdminToken, shouldBeAdmin);

export default routerTest;