// Page.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { SwitchCustom } from 'components/_index';

type PagePropsAndCustomArgs = typeof SwitchCustom

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Example2/Sle',
  component: SwitchCustom,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

export const CustomFooter: Story = {
    args:{
        title:'test',
        
    }
};