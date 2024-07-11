import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Item as ItemType } from "@/types"; // Adjust the import path if necessary

interface ItemProps {
  item: ItemType;
}

export function Item({ item }: ItemProps) {
  return (
    <Card>
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
      <Button>Restock History</Button>
    </Card>
  );
}
