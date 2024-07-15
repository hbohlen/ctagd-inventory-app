import React, { useEffect, useState } from "react";
import { AddItemForm } from "@/components/AddItemForm";
import { Item } from "@/components/Item";
import { Item as ItemType } from "@/types"; // Ensure the path is correct
import { FormModal } from "@/components/FormModal";
import { NavMenu } from "@/components/NavMenu";
import Layout from "@/app/layout";
import { Theme } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { ItemForm } from "@/components/ItemForm";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

const mockItem: ItemType = {
  id: 1,
  name: "Test Item",
  quantity: 10,
  vendorLink: "https://www.amazon.com",
};

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]); // Explicitly define the type
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/items/get-items");
        if (response.ok) {
          const data: ItemType[] = await response.json(); // Explicitly define the type
          console.log("Fetched items:", data);
          setItems(data); // Ensure items are set after initial render
        } else {
          console.error("Failed to fetch items");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  const addItemToList = (newItem: ItemType) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItemInList = (updatedItem: ItemType) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <div className="container">
      <ItemForm />
    </div>
  );
};

export default Home;
