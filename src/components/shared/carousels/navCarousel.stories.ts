import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavSlider from './navCarousel';

const meta = {
    title: 'Example/NavSlider',
    component: NavSlider,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof NavSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const main: Story = {
};