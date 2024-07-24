import { Item as ItemType } from '@/types';

export async function fetchItems(): Promise<ItemType[]> {
  try {
    const res = await fetch('/api/items/get-items');

    if (res.ok) {
      const data: ItemType[] = await res.json();
      console.log('Fetched items: ', data);
      return data;
    } else {
      console.error('Failed to fetch items');
      return [];
    }
  } catch (error) {
    console.error('Failed to fetch items: ', error);
    return [];
  }
}

export async function addItem(values: any): Promise<ItemType | null> {
  try {
    const response = await fetch('/api/items/add-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...values,
        vendorLink: values.vendorLink || null
      })
    });

    if (response.ok) {
      const newItem: ItemType = await response.json();
      console.log('Item added successfully');
      return newItem;
    } else {
      console.log('Failed to add item.');
      return null;
    }
  } catch (error) {
    console.error('Error adding item:', error);
    return null;
  }
}
