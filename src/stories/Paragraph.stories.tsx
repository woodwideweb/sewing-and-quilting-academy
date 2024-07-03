import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "../components/Paragraph";
import "../base.css"

const meta: Meta<typeof Paragraph> = {
    component: Paragraph
}

export default meta;

type Story = StoryObj<typeof Paragraph>

export const ParagraphStory: Story = {
    name: "Paragraph",
    args: {
        children: "Hello world",
        className: "text-red-500"
    }
}