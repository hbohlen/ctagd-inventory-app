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
  return (
    <FormProvider {...form}>
      <StyledForm
        formBackgroundColor={formBackgroundColor}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <StyledFormItem>
              <StyledFormLabel nameLabelColor={nameLabelColor}>
                Item Name
              </StyledFormLabel>
              <FormControl>
                <StyledFormInput
                  formInputBorder={formInputBorder}
                  formInputBackgroundColor={formInputBackgroundColor}
                  formInputTextColor={formInputTextColor}
                  placeholder="Item Name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </StyledFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <StyledFormItem>
              <StyledFormLabel nameLabelColor={nameLabelColor}>
                Quantity
              </StyledFormLabel>
              <FormControl>
                <StyledFormInput
                  formInputBorder={formInputBorder}
                  formInputBackgroundColor={formInputBackgroundColor}
                  formInputTextColor={formInputTextColor}
                  placeholder="Quantity"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </StyledFormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </FormProvider>
  );
};

export default AddItemForm;
