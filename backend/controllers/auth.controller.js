import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config.js";

export const register=async(req,res)=>{
    const { username, email, password } = req.body;
    try{
    //Hash password
    const hashedPassword = await bcrypt.hash(password,10)

    const newClient = await prisma.client.create({
        data: {
            username,
            email,
            password: hashedPassword,
          },
    });

     res.status(201).json({ message: "New client created successfully" });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Oops Failed to create !!" });
      }
    
}
export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // CHECK IF THE CLIENT EXISTS
  
      const clientexist = await prisma.client.findUnique({
        where: { username },
      });
  
      if (!clientexist) return res.status(400).json({ message: "Invalid Credentials!" });
  
      // CHECK IF THE PASSWORD IS CORRECT
  
      const isPasswordValid = await bcrypt.compare(password, clientexist.password);
  
      if (!isPasswordValid) return res.status(400).json({ message: "Invalid Credentials!" });
  
      // GENERATE COOKIE TOKEN AND SEND TO THE USER
  
      //res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
      const age = 1000 * 60 * 60 * 24 * 7;
  
      const token = jwt.sign(
        {
          id: clientexist.id,
          isAdmin: false,
        },
        JWT_SECRET_KEY,
        { expiresIn: age }
      );
  
      const { password: userPassword, ...clientInfo } = clientexist;
  
      res
        .cookie("token", token, {
          httpOnly: true,
          // secure:true,
          maxAge: age,
        })
        .status(200)
        .json(clientInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to login!" });
    }
  };

  export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };