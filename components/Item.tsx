import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Item as ItemType } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { EditItemForm } from './EditItemForm';
import Link from 'next/link';

interface ItemProps {
  item: ItemType;
  onItemEdit: (item: ItemType) => void;
}

export function Item({ item, onItemEdit }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsOpen(true)}
        className="flex-1 min-w-[250px] max-w-[300px]"
      >
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Item Quantity: {item.quantity}</p>
        </CardContent>
        {item.vendorLink && item.vendorLink !== '' && (
          <CardContent>
            <p>
              Item Vendor Link:{' '}
              <Link href={item.vendorLink} legacyBehavior passHref>
                {item.vendorLink}
              </Link>
            </p>
          </CardContent>
        )}
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          <EditItemForm item={item} onItemEdit={onItemEdit} />
        </DialogContent>
      </Dialog>
    </>
  );
}
