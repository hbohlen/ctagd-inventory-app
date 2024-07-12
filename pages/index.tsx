import React, { useEffect, useState } from "react";
import { AddItemForm } from "@/components/AddItemForm";
import { Item } from "@/components/Item";
import { Item as ItemType } from "@/types"; // Ensure the path is correct
import { FormModal } from "@/components/FormModal";

const mockItem: ItemType = {
  id: 1,
  name: "Test Item",
  quantity: 10,
  vendorLink: "https://www.amazon.com",
};

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]); // Explicitly define the type
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/get-items");
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

  return (
    <>
      <FormModal onAddItem={addItemToList} />

      {!loading && items.length === 0 && <p>No items found</p>}
      {loading && <p>Loading...</p>}
      <div>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        
        ))}
      </div>
    </>
  );
};

export default Home;
