import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface BeverageNameFieldProps {
  form: UseFormReturn<any>; // Adjust the type according to your form schema
}

const BeverageNameFormField: React.FC<BeverageNameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Beverage Name</FormLabel>
        <FormControl>
          <Input placeholder="Beverage Name" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default BeverageNameFormField;
