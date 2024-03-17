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

import styled from "styled-components";

export interface AddItemFormProps {
  backgroundColor: string;
  placeHolderTextColor: string;
  borderColor: string;
}

const AddItemForm: React.FC<AddItemFormProps> = ({}) => {
  return <></>;
};

export default AddItemForm;
