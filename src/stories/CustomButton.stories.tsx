import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButtom from './CustomButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Custom Button',
    component: CustomButtom,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        type: {control: 'radio', options: ['default', 'primary', 'secondary', 'tertiary', 'lightPrimary'] },
        size: {control: 'select', options: ['small', 'medium', 'large']},
        rounded: {control: 'boolean'},
        disabled: {control: 'boolean'},
        buttonType: {control: 'radio', options: ['button', 'submit']}
    },
} as ComponentMeta<typeof CustomButtom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButtom> = (args) => <CustomButtom {...args} />;

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
    type: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
    size: 'small',
    label: 'Button',
    rounded: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'small',
    label: 'Button',
    rounded: true,
    disabled: true
};

export const ButtonType = Template.bind({});
ButtonType.args = {
    size: 'small',
    label: 'Button',
    rounded: true,
    buttonType: 'submit'
};
