import React from "react";
import AddItemForm, { AddItemFormProps } from "@/components/AddItemForm";
import "@/styles/globals.css";

export default {
  title: "AddItemForm",
  component: AddItemForm,
  argTypes: {
    backgroundColor: { control: "color" },
    placeHolderTextColor: { control: "color" },
    borderColor: { control: "color" },
  },
  args: {},
} as Meta;

const Template: Story<AddItemFormProps> = (args) => <AddItemForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "red",
  placeHolderTextColor: "blue",
  borderColor: "green",
};
