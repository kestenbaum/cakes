import React from "react";

export interface AppRouter {
    path: string;
    component: React.ComponentType;
}
export interface IHeader {
    background: string
}
export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}