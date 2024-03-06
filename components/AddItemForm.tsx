"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
});

type AddItemFormprops = {};
type AddItemFormInputs = z.infer<typeof formSchema>;

const AddItemForm: React.FC = () => {
  const form = useForm<AddItemFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      price: 0.01,
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
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="1"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>Enter the quantity of the item.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.01"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>Enter the price of the item.</FormDescription>
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
