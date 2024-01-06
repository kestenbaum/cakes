import React from "react";

export interface IPathElement {
    children: string
}

export interface ISlider {
    array: any[],
    path?: string
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

export interface IButtonContact extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {
    svg?: any
    title?: string
    store?: string
}

export interface IPruductTitle {
    children: string
}