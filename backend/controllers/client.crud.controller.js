import prisma from "../lib/prisma.js";

export const getClientList= async (req, res) => {
    try {
      const clientList = await prisma.client.findMany();
      res.status(200).json(clientList);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get clientList!" });
    }
  };

export const getSingleClient= async (req, res) => {
    const id = req.params.id;
    try {
      const singleClient = await prisma.client.findUnique({
        where: { id },
      });
      res.status(200).json(singleClient);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get singleClient!" });
    }
  };

export const deleteClient= async (req, res) => {
    const id = req.params.id;

    try {
      await prisma.client.delete({
        where: { id },
      });
      res.status(200).json({ message: "client deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to delete client!" });
    }
  };
  