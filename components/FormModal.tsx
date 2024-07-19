import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Item as ItemType } from "@/types";
import { ItemForm } from "./ItemForm";

interface FormModalProps {
  onAddItem: (item: ItemType) => void;
}

const FormModal: React.FC<FormModalProps> = ({ onAddItem }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-w-md w-full p-6 bg-white rounded-lg transform -translate-x-[50%] -translate-y-[50%]">
          <Dialog.Title className="text-lg font-bold">Add Item</Dialog.Title>
          <Dialog.Description className="mb-4">
            Fill out the form below to add a new item.
          </Dialog.Description>
          <ItemForm onAddItem={onAddItem} />
          <Dialog.Close asChild>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FormModal;
