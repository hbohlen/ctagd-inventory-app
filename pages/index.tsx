import React, { useEffect, useState } from 'react';
import { Item as ItemType } from '@/types';
import Layout from '@/app/layout'; // Ensure the correct path
import ItemList from '@/components/ItemList'; // Ensure the correct path
import ItemDialog from '@/components/FormModal'; // Ensure the correct path
import { fetchItems } from '@/services/itemService'; // Ensure the correct path
import '@/styles/globals.css';

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

  return (
    <Layout>
      <ItemDialog />
      {!loading && items.length === 0 && <p>No items found</p>}
      {loading && <p>Loading...</p>}
      <ItemList items={items} />
    </Layout>
  );
};

export default Home;
