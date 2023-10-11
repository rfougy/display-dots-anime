import { MouseEventHandler } from "react";
export interface TestProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
