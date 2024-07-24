import React from 'react';
import { Item as ItemType } from '@/types';

interface ItemListProps {
  items: ItemType[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          {item.vendorLink && (
            <p>
              Vendor:{' '}
              <a
                href={item.vendorLink}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
