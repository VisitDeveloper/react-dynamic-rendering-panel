import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./../../SwitchCustom/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Switch> = {
  title: "Example2/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args:{
    isToggle:false,
    title:"horizentalasdasd" ,
    labelStatus:"horizental",
    className:"gap-1",
    classnamelabel:"text-1xl",
    variant:"iosStyle"
  }
};

export const Secondary: Story = {
  args: {
    isToggle: false,
    title: "horizental simple",
    labelStatus: "horizental",
    className: "gap-0",
    classnamelabel: "text-1xl",
    variant: "simple",
  },
};

export const MuiStyle: Story = {
  args: {
    isToggle: false,
    title: "horizental mui style",
    labelStatus: "horizental",
    className: "gap-1",
    classnamelabel: "text-1xl",
    variant: "muiStyle",
  },
};

// export const Disable : Story ={
//   args:{
//     paletteColor :'disable',
//     hasRipple: HasRipple.isRipple,
//     children:'Disable'
//   }
// }
