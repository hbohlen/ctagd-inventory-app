import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/db';
import { inventoryItems } from '@/db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      console.log('Fetching items from database');
      const items = await db.select().from(inventoryItems);
      console.log('Items fetched:', items);
      res.status(200).json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}