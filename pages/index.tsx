import React from "react";
import AddItemForm from "@/components/AddItemForm";
import { createItem } from "@/services/itemService"; // Import the service function

const Home: React.FC = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log("Submitting form with data:", data); // Log the form data
      const newItem = await createItem(data.name, data.quantity);
      console.log("Item created:", newItem); // Log the new item
    } catch (error) {
      console.error("Failed to create item", error);
    }
  };

  return (
    <AddItemForm
      formBackgroundColor="#fff"
      nameLabelColor="#000"
      formInputBorder="#000"
      formInputBackgroundColor="#fff"
      formInputTextColor="#000"
      onSubmit={onSubmit}
    />
  );
};

export default Home;
