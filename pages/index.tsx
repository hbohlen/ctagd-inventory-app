import React, { useEffect, useState } from "react";
import { Item as ItemType } from "@/types";
import Layout from "@/app/Layout";
import { ItemForm } from "@/components/ItemForm";
import { fetchItems } from "@/services/itemService";
import ItemList from "@/components/ItemList";
import "@/styles/globals.css";

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function getItems() {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    }

    getItems();
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
      <ItemList items={items} />
    </Layout>
  );
};

export default Home;
