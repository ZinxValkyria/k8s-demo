import AuthCtx from "../../components/auth/AuthCtx";
import {useParameter} from "@storybook/addons";
import { useState } from "react";

export default function SessionDecorator(Story, context) {
    return (
        <div>
            <AuthCtx session={context}>
            <Story />
            </AuthCtx>
        </div>
    );
}