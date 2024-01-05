import React, {FC, InputHTMLAttributes} from 'react';

import style from "./Checkbox.module.css"

export interface ICheckbox extends React.InputHTMLAttributes<InputHTMLAttributes<any>>
{
    children: string
}
const Checkbox:FC<ICheckbox> = ({children}) => {
    return (
        <>
            <input
                className={style.custom}
                id="myCheckbox"
                type="checkbox"
            />
            <label
                htmlFor="myCheckbox"
                className={style.text}
            >
                {children}
            </label>
        </>
    );
};

export default Checkbox;