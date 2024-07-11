import React from "react";
import { AddItemForm } from "@/components/AddItemForm";
import { Item } from "@/components/Item";
import { Item as ItemType } from "@/types"; // Adjust the import path as necessary

const mockItem: ItemType = {
  id: 1,
  name: "Test Item",
  quantity: 10,
  vendorLink: "https://www.amazon.com"
};

const Home: React.FC = () => {
  return (
    <>
      <AddItemForm />
      <Item item={mockItem} />
    </>
  );
};

export default Home;
