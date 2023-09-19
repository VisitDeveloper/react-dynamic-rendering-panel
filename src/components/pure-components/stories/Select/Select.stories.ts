import type { Meta, StoryObj } from '@storybook/react';
import  {Select}  from 'components/_index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example2/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const GroupOption: Story = {
  args:{
    groupOptions:[
        {
          label: "Color",
          options: [
            { value: "123", children: "blue" },
            { value: "12313", children: "red" },
            { children: "green" },
          ],
        },
        {
          label: "Weight",
          options: [
            { value: "75kg", children: "75kg" },
            { value: "80kg", children: "80kg" },
            { value: "90kg", children: "90kg" },
          ],
        },
      ]
  }
};

export const Option: Story = {
  args: {
    options:[
        {value:'123',children:'blue' } ,
        {value:'12313',children:'red'},
        {children:'green'},
    ]
  },
};

