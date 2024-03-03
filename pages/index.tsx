import AddItemForm from "@/components/AddItemForm";
import { useState, useEffect } from "react";
import prisma from "@/lib/prisma";
import { Item } from "@prisma/client";

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const fetchedItems = await response.json();
      console.log(JSON.stringify(fetchedItems, null, 2));
      setItems(fetchedItems);
    };
    fetchItems();
  }, []);

  const addItem = async (itemName: string) => {
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: itemName }),
    });
    const newItem = await response.json();
    console.log("Added item:", JSON.stringify(newItem, null, 2)); // Log the added item
    setItems([...items, newItem]);
  };

  return (
    <div>
      <AddItemForm onAddItem={addItem} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
