import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

export const formSchema = z.object({
    name: z.string().min(2, {
      message: "Item name must be at least 2 characters.",
    }),
    quantity: z.number().min(1, {
      message: "Item quantity must be at least 1.",
    }),
    vendorLink: z.string().url().optional().or(z.literal("")),
  });


  export const formResolver = {
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      vendorLink: "",
    },
}