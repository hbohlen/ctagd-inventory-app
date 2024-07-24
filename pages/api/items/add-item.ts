import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../db';
import { inventoryItems } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, quantity, vendorLink } = req.body;

    try {
      // Validate the input
      if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing item name' });
      }

      if (!quantity || typeof quantity !== 'number') {
        return res
          .status(400)
          .json({ error: 'Invalid or missing item quantity' });
      }

      // Insert the new item into the database
      await db.insert(inventoryItems).values({
        name,
        quantity,
        vendorLink: vendorLink || null // vendorLink is optional
      });

      // Fetch the inserted item
      const result = await db
        .select({
          id: inventoryItems.id,
          name: inventoryItems.name,
          quantity: inventoryItems.quantity,
          vendorLink: inventoryItems.vendorLink
        })
        .from(inventoryItems)
        .where(eq(inventoryItems.name, name))
        .limit(1);

      const newItem = result[0];

      res.status(200).json(newItem);
    } catch (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ error: 'Failed to add item' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
