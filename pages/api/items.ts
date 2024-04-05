// pages/api/items.ts

import type { NextApiRequest, NextApiResponse } from "next";
import * as itemService from "../../services/itemService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, quantity } = req.body;
    try {
      const newItem = await itemService.createItem(name);
      res.status(200).json(newItem);
    } catch (error) {
      res.status(500).json({ error: "Failed to create item" });
    }
  } else if (req.method === "GET") {
    try {
      const allItems = await itemService.getAllItems();
      res.status(200).json(allItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to get items" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
