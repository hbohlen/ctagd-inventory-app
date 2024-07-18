import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Item as ItemType } from "@/types";

import { AddItemForm } from "./AddItemForm";

interface FormModalProps {
  onAddItem: (item: ItemType) => void;
}

export function FormModal({ onAddItem }: FormModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
        </DialogHeader>
        <AddItemForm onAddItem={onAddItem} />
      </DialogContent>
    </Dialog>
  );
}
