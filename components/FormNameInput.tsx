import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

import "@/styles/globals.css";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

type FormNamneInput = z.infer<typeof formSchema>;

const FormNameInput: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="p-4 bg-black">
            <FormLabel className="block mb-1 text-purple-500 font-bold pl-1">
              Item Name
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Enter the name of the item."
                {...field}
                className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded-lg focus:border-white"
              />
            </FormControl>

            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </Form>
  );
};

export default FormNameInput;
