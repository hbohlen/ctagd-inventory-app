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
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export interface FormNameInputProps {
  backgroundColor: string;
}

const FormNameInput: React.FC<FormNameInputProps> = ({ backgroundColor }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <FormProvider {...form}>
      <StyledForm
        backgroundColor={backgroundColor}
        onSubmit={form.handleSubmit((data) => console.log(data))}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
