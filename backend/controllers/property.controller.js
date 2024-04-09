import prisma from "../lib/prisma.js";

export const getPropertyList = async (req, res) => {
  const query = req.query;
  try {
    const propertyPostList = await prisma.propertyPost.findMany({
      where: {
        city: query.city || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000,
        },
      },
    });

    res.status(200).json(propertyPostList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get property" });
  }
};

export const getSingleProperty = async (req, res) => {
  const id = req.params.id;
  try {
    const SingleProperty = await prisma.propertyPost.findUnique({
      where: { id },
    });
    res.status(200).json(SingleProperty);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get property" });
  }
};

export const addNewProperty = async (req, res) => {
  const body = req.body;
  try {
    const newProperty = await prisma.propertyPost.create({
      data: {
        ...body
      },
    });
    res.status(200).json(newProperty);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create property" });
  }
};

export const updateProperty = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const UpdatedProperty = await prisma.propertyPost.update({
      where:{id},
      data: {
        ...body
      },
    });
    res.status(200).json(UpdatedProperty);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update Property" });
  }
};

export const deleteProperty = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.propertyPost.delete({
      where: { id },
    });

    res.status(200).json({ message: "Property deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete Property" });
  }
};