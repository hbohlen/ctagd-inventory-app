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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        form.setValue("image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => handleImageChange(e as any); // Cast to any because typescript doesn't recognize the event type
    input.click();
  };

  const handleDeleteImage = () => {
    setImagePreview(null);
    form.setValue("image", "");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem onClick={handleImageClick} className="cursor-pointer">
              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Preview" className="w-24 h-24" />
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    X
                  </button>
                </>
              ) : (
                <div className="w-24 h-24 bg-gray-300 flex justify-center items-center">
                  Upload Image
                </div>
              )}
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="vendor"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Vendor</FormLabel>
              <FormControl>
                <Input
                  placeholder="Vendor name"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>
                Enter the vendor of the item (optional).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="Link"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>
                Enter a link for the item (optional).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="Category"
                  {...field}
                  className="bg-gray-800 text-white"
                />
              </FormControl>
              <FormDescription>
                Enter the category of the item (optional).
              </FormDescription>
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
