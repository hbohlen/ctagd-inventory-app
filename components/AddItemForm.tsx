"use client";
import React from "react";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createItem } from "@/services/itemService"; // Import the service function

const formSchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, { message: "Name must be at least 3 characters long" }), // Custom error message for name
  quantity: z
    .number()
    .int()
    .positive()
    .min(1, { message: "Quantity must be a positive integer" }), // Custom error message for quantity
});

export interface AddItemFormProps {}
type FormValues = z.infer<typeof formSchema>;

const AddItemForm: React.FC<AddItemFormProps> = ({}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 0, // Set quantity default value to 0
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Item Name</FormLabel>
            <FormControl>
              <Input placeholder="Item Name" {...field} />
            </FormControl>

            {/* Display error message for name field */}
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="quantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Quantity" {...field} />
            </FormControl>

            {/* Display error message for quantity field */}
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddItemForm;
