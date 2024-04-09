import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET_KEY } from "../config.js";

export const adminregister=async(req,res)=>{
    const { username, email, password } = req.body;

    try{
    //Hash password
    const hashedPassword = await bcrypt.hash(password,10)

    const newAdmin = await prisma.admin.create({
        data: {
            username,
            email,
            password: hashedPassword,
          },
    });

     res.status(201).json({ message: "New Admin created successfully" });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Oops Failed to create !!" });
      }
    
}
export const adminlogin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // CHECK IF THE Admin EXISTS
  
      const adminexist = await prisma.admin.findUnique({
        where: { username },
      });
  
      if (!adminexist) return res.status(400).json({ message: "Invalid Credentials!" });
  
      // CHECK IF THE PASSWORD IS CORRECT
  
      const isPasswordValid = await bcrypt.compare(password, adminexist.password);
  
      if (!isPasswordValid) return res.status(400).json({ message: "Invalid Credentials!" });
  
      // GENERATE COOKIE TOKEN AND SEND TO THE USER
  
      const age = 1000 * 60 * 60 * 24 * 7;

      const admintoken = jwt.sign(
        {
          id: adminexist.id,
          isAdmin: true,
        },
        JWT_ADMIN_SECRET_KEY,
        { expiresIn: age }
      );
  
      const { password: adminPassword, ...adminInfo } = adminexist;
  
      res
        .cookie("admintoken", admintoken, {
          httpOnly: true,
          // secure:true,
          maxAge: age,
        })
        .status(200)
        .json(adminInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to login!" });
    }
  };

  export const adminlogout = (req, res) => {
    res.clearCookie("admintoken").status(200).json({ message: "Admin Logout Successful" });
  };