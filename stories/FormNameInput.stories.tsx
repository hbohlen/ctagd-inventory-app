import React from "react";
import FormNameInput, { FormNameInputProps } from "@/components/FormNameInput";
import "@/styles/globals.css";
import { Story, Meta } from "@storybook/react";

export default {
  title: "FormNameInput",
  component: FormNameInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} as Meta;

const Template: Story<FormNameInputProps> = (args) => (
  <FormNameInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "red",
};
