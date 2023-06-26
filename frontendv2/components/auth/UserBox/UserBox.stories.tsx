import type { Meta, StoryObj } from "@storybook/react";
import UserBox from './UserBox';
import SessionDecorator from "../../../.storybook/decorators/SessionDecorator";
import { Session } from "next-auth";
import AuthCtx from "../Session";

const session: Session = {
    user: {
        name: "Alex",
        email: "Not a real Email",
        image: "not a real image"
    },
    expires: (new Date('05 October 2011 14:48 UTC')).toISOString()

}

const meta: Meta<typeof UserBox> = {
    component: UserBox,
    decorators: [
        (Story) => SessionDecorator(Story, session),
    ],
}

export default meta;
type Story = StoryObj<typeof UserBox>

export const UserBoxStory: Story = {
    args: {
        
    }
}