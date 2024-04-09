import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET_KEY } from "../config.js";

export const verifyAdminToken = (req, res, next) => {
  const admintoken = req.cookies.admintoken;

  if (!admintoken) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(admintoken,JWT_ADMIN_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "admintoken is not Valid!" });
    if (!payload.isAdmin) {
        return res.status(403).json({ message: "Not authorized!" });
      }
    req.adminId = payload.id;

    next();
  });
};