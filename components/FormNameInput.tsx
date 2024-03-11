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

import styled from "styled-components";

const StyleFormNameInput = styled.input<FormNameInputProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) =>
    props.backgroundColor === "#ffffff" ? "#000000" : "#ffffff"};
  &::placeholder {
    color: ${(props) => props.placeHolderTextColor || "inherit"};
  }
  border-color: ${(props) => props.borderColor || "#000000"};
`;

export interface FormNameInputProps {
  backgroundColor: string;
  placeHolderTextColor: string;
  borderColor: string;
}

const FormNameInput: React.FC<FormNameInputProps> = ({
  backgroundColor,
  placeHolderTextColor,
  borderColor,
}) => {
  return (
    <StyleFormNameInput
      placeholder="Enter your name"
      backgroundColor={backgroundColor}
      placeHolderTextColor={placeHolderTextColor}
      borderColor={borderColor}
    />
  );
};

export default FormNameInput;
