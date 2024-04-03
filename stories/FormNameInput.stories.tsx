import React from "react";
import FormNameInput, { FormNameInputProps } from "@/components/FormNameInput";
import "@/styles/globals.css";
import { Story, Meta } from "@storybook/react";

export default {
  title: "FormNameInput",
  component: FormNameInput,
  argTypes: {
    formBackgroundColor: { control: "color" },
    nameLabelColor: { control: "color" },
    formInputBorder: { control: "color" },
    formInputBackgroundColor: { control: "color" },
    formInputTextColor: { control: "color" },
  },
  args: {},
} as Meta;

const Template: Story<FormNameInputProps> = (args) => (
  <FormNameInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  formBackgroundColor: "red",
  nameLabelColor: "blue",
  formInputBorder: "green",
  formInputBackgroundColor: "yellow",
  formInputTextColor: "purple",
};
