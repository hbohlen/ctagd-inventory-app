import { useState, FormEvent } from "react";

type AddItemFormProps = {
  onAddItem?: (itemName: string) => void;
};

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddItem(itemName);
    setItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
