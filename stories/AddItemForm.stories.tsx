import React from "react";
import AddItemForm, { AddItemFormProps } from "@/components/AddItemForm";
import "@/styles/globals.css";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "AddItemForm",
  component: AddItemForm,
  argTypes: {
    formBackgroundColor: { control: "color" },
    nameLabelColor: { control: "color" },
    formInputBorder: { control: "color" },
    formInputBackgroundColor: { control: "color" },
    formInputTextColor: { control: "color" },
  },
  args: {},
} as Meta;

const Template: Story<AddItemFormProps> = (args) => <AddItemForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  formBackgroundColor: "red",
  nameLabelColor: "blue",
  formInputBorder: "green",
  formInputBackgroundColor: "yellow",
  formInputTextColor: "purple",
  onSubmit: action("onSubmit"),
};
