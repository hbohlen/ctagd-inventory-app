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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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

export interface FormNameInputProps {
  formBackgroundColor: string;
  nameLabelColor: string;
  formInputBorder: string;
  formInputBackgroundColor: string;
  formInputTextColor: string;
}

const FormNameInput: React.FC<FormNameInputProps> = ({
  formBackgroundColor,
  nameLabelColor,
  formInputBorder,
  formInputBackgroundColor,
  formInputTextColor,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <FormProvider {...form}>
      <StyledForm
        formBackgroundColor={formBackgroundColor}
        onSubmit={form.handleSubmit((data) => console.log(data))}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <StyledFormLabel nameLabelColor={nameLabelColor}>
                Item Name
              </StyledFormLabel>
              <FormControl>
                <StyledFormInput
                  formInputBorder={formInputBorder}
                  formInputBackgroundColor={formInputBackgroundColor}
                  formInputTextColor={formInputTextColor}
                  placeholder="shadcn"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </StyledForm>
    </FormProvider>
  );
};

export default FormNameInput;
