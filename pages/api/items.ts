// pages/api/items.ts

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Handle GET requests
    try {
      const items = await prisma.item.findMany();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch items" });
    }
  } else if (req.method === "POST") {
    // Handle POST requests
    const { name } = req.body;
    try {
      const newItem = await prisma.item.create({
        data: {
          name,
        },
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to add item" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
