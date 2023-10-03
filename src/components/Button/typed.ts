import {ReactNode} from "react";

export enum ButtonColor {
    DARK = "dark-btn",
    BLUE = "blue-btn",
    ICON = "icon-btn",
}

export interface ButtonTyped {
    type: ButtonColor;
    title?: string;
    icon?: ReactNode;
    onClick?: () => void;
}