import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Carousel from "./carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as Meta;

const Template: Story = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
