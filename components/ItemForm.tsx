"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { formSchema, formResolver } from "@/zod/schema";
import { z } from "zod"; // Import z from zod
import { addItem } from "@/services/itemService";
import { useRouter } from "next/navigation";

interface ItemFormProps {
  onSubmitSuccess?: () => void;
}

export function ItemForm({ onSubmitSuccess }: ItemFormProps) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>(formResolver);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const newItem = await addItem(values);
    if (newItem) {
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      router.refresh();
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} className="bg-gray-500 p-6 rounded-md">
      <Form.Field name="name">
        <div className="flex flex-col mb-4">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Item Name</Form.Label>
          <Form.Control asChild>
            <input type="text" {...register("name")} className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6" />
          </Form.Control>
          {errors.name && <Form.Message className="error-class text-red-500">{errors.name.message}</Form.Message>}
        </div>
      </Form.Field>

      <Form.Field name="quantity">
        <div className="flex flex-col mb-4">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Item Quantity</Form.Label>
          <Form.Control asChild>
            <input type="number" {...register("quantity", { valueAsNumber: true })} className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6" />
          </Form.Control>
          {errors.quantity && <Form.Message className="error-class text-red-500">{errors.quantity.message}</Form.Message>}
        </div>
      </Form.Field>

      <Form.Field name="vendorLink">
        <div className="flex flex-col mb-4">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Vendor Link</Form.Label>
          <Form.Control asChild>
            <input type="text" {...register("vendorLink")} className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6" />
          </Form.Control>
          {errors.vendorLink && <Form.Message className="error-class text-red-500">{errors.vendorLink.message}</Form.Message>}
        </div>
      </Form.Field>

      <Form.Submit asChild>
        <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">Submit</button>
      </Form.Submit>
    </Form.Root>
  );
}
