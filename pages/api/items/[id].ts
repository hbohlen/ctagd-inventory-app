import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/db';
import { inventoryItems } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing item id' });
  }

  if (req.method === 'GET') {
    try {
      const items = await db
        .select()
        .from(inventoryItems)
        .where(eq(inventoryItems.id, Number(id)));

      if (items.length === 0) {
        return res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Error fetching item: ', error);
      res.status(500).json({ error: 'Failed to fetch item' });
    }
  } else if (req.method === 'PUT') {
    const { name, quantity, vendorLink } = req.body;

    try {
      await db
        .update(inventoryItems)
        .set({
          name,
          quantity,
          vendorLink: vendorLink || null
        })
        .where(eq(inventoryItems.id, Number(id)));

      res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
      console.error('Error updating item: ', error);
      res.status(500).json({ error: 'Failed to update item' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
