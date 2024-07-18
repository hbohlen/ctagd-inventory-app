import React, { useEffect, useState } from "react";
import { Item as ItemType } from "@/types";
import Layout from "@/app/Layout";
import { ItemForm } from "@/components/ItemForm";
import "@/styles/globals.css";

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
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
          const data: ItemType[] = await response.json();
          console.log("Fetched items:", data);
          setItems(data);
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
    <Layout>
      <ItemForm onAddItem={addItemToList} />
      {!loading && items.length === 0 && <p>No items found</p>}
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            {item.vendorLink && (
              <p>
                Vendor: <a href={item.vendorLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
