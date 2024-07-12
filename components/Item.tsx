import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item as ItemType } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EditItemForm } from "./EditItemForm"; // Ensure this path is correct

interface ItemProps {
  item: ItemType;
  onItemEdit: (item: ItemType) => void;
}

export function Item({ item, onItemEdit }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Item Quantity: {item.quantity}</p>
        </CardContent>
        {item.vendorLink && item.vendorLink !== "" && (
          <CardContent>
            <p>
              Item Vendor Link:{" "}
              <a href={item.vendorLink} target="_blank" rel="noopener noreferrer">
                {item.vendorLink}
              </a>
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
