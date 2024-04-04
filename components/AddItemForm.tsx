"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
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

import "@/styles/globals.css";

import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  quantity: z.string().min(1, {
    message: "Quantity must be at least 1 character.",
  }),
});

export const StyledForm = styled.form`
  background-color: ${({ formBackgroundColor }) =>
    formBackgroundColor || "white"};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledFormLabel = styled.label`
  color: ${({ nameLabelColor }) => nameLabelColor || "black"};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const StyledFormInput = styled.input`
  background-color: ${({ formInputBackgroundColor }) =>
    formInputBackgroundColor || "white"};
  color: ${({ formInputTextColor }) => formInputTextColor || "black"};
  border: 1px solid ${({ formInputBorder }) => formInputBorder || "black"};
`;

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export interface AddItemFormProps {
  formBackgroundColor: string;
  nameLabelColor: string;
  formInputBorder: string;
  formInputBackgroundColor: string;
  formInputTextColor: string;
  onSubmit: (data: any) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({
  formBackgroundColor,
  nameLabelColor,
  formInputBorder,
  formInputBackgroundColor,
  formInputTextColor,
  onSubmit,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    //console.log("Form data:", data); // Log form data
    try {
      const response = await axios.post("/api/items", values);
      console.log(response.data);
      // Clear the form fields
      form.reset();
    } catch (error) {
      console.error("Failed to add item", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        /*formBackgroundColor={formBackgroundColor}*/
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel /*nameLabelColor={nameLabelColor}*/>
                Item Name
              </FormLabel>
              <FormControl>
                <Input
                  // /*formInputBorder={formInputBorder}*/
                  // formInputBackgroundColor={formInputBackgroundColor}
                  // formInputTextColor={formInputTextColor}
                  placeholder="Item Name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel /*nameLabelColor={nameLabelColor}*/>
                Quantity
              </FormLabel>
              <FormControl>
                <Input
                  // formInputBorder={formInputBorder}
                  // formInputBackgroundColor={formInputBackgroundColor}
                  // formInputTextColor={formInputTextColor}
                  placeholder="Quantity"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddItemForm;
