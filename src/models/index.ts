import React from "react";

export interface IPathElement {
    children: string
}

export interface AppRouter {
    path: string;
    component: React.ComponentType;
    title?: string
}
export interface IHeader {
    background: string
}
export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}