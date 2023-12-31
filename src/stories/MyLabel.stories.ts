import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type MylabelProps } from "../components/MyLabel";

const meta:Meta<MylabelProps> = {
    title: 'UI/labels/MyLabel',
    tags: ['autodocs'],    
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        fontColor: {
            control: 'color'
        },
        size: {
            control: 'inline-radio'
        }
    },
    component: MyLabel,    
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }

}

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true
    },
    
}

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }

}

export const CustomColor: Story = {
    args: {
        label: 'custom Color label',
        fontColor: '#ddd'
    }

}

export const CustomBackgroundcolor: Story = {
    args: {
        label: 'custom Color label',
        fontColor: '#eeeeee',
        backgroundColor: '#000000'
    }

}