import prisma from "../prisma/prisma";

export const createItem = async (name: string, quantity: number) => {
  return await prisma.item.create({
    data: { name, quantity },
  });
};

export const getAllItems = async () => {
  return await prisma.item.findMany();
};
