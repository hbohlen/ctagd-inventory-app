import prisma from "../prisma/prisma";

export const createItem = async (name: string) => {
  return await prisma.item.create({
    data: { name },
  });
};

export const getAllItems = async () => {
  return await prisma.item.findMany();
};
