"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Item as ItemType } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Item name must be at least 2 characters.",
  }),
  quantity: z.number().min(1, {
    message: "Item quantity must be at least 1.",
  }),
  vendorLink: z.string().url().optional().or(z.literal('')),
});

interface AddItemFormProps {
  onAddItem: (item: ItemType) => void;
}

export function AddItemForm({onAddItem}: AddItemFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      vendorLink: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const response = await fetch("/api/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          vendorLink: values.vendorLink || null,
        }),
      });

      if (response.ok) {
        const newItem: ItemType = await response.json();
        onAddItem(newItem);

        setSubmitted(true);
        console.log("Item added successfully");
      } else {
        console.log("Failed to add item.");
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Item Name" {...field} />
              </FormControl>

              <FormDescription>Enter the name of the item</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Quantity</FormLabel>
              <FormControl>
                <Input placeholder="Item Quantity" {...field} type="number" onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
              </FormControl>
              <FormDescription>Enter the quantity of the item</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vendorLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vendor Link</FormLabel>
              <FormControl>
                <Input placeholder="Vendor Link" {...field} />
              </FormControl>
              <FormDescription>Enter the vendor link of the item (optional)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {submitted && <p>Item added successfully!</p>}
    </Form>
  );
}
