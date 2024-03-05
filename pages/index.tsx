import { useState, useEffect } from "react";

import { Item } from "@prisma/client";
import Layout from "@/app/layout";
import { Button } from "@nextui-org/react";

import AddItemModal from "@/components/AddItemModal";
import AddItemForm from "@/components/AddItemForm";

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <Layout>
      <div>
        <Button onPress={() => setIsModalOpen(true)}>Open Modal</Button>

        <AddItemModal
          onAddItem={addItem}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <AddItemForm />
        </AddItemModal>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
