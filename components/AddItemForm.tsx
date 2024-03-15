"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";

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
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  quantity: z.number().int().positive({
    message: "Quantity must be a positive integer.",
  }),
  price: z.number().positive({
    message: "Price must be a positive number.",
  }),
  image: z
    .string()
    .optional()
    .refine(
      (value) => value === "" || validator.isURL(value ?? ""),
      "Invalid URL"
    ),
  vendor: z.string().optional(),
  link: z
    .string()
    .optional()
    .refine(
      (value) => value === "" || validator.isURL(value ?? ""),
      "Invalid URL"
    ),
  category: z.string().optional(),
});

type AddItemFormprops = {};
type AddItemFormInputs = z.infer<typeof formSchema>;

const AddItemForm: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<AddItemFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      price: 0.01,
      image: "",
      vendor: "",
      link: "",
      category: "",
    },
  });

  const onSubmit = (data: AddItemFormInputs) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Item name"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>Enter the name of the item.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-gray-800 text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddItemForm;
