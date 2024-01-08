import React, {FC} from 'react';

import {IInput} from "../../../models";
import style from "./Input.module.css"

const Input:FC<IInput> = ({ value, onChange, placeholder = '', children}) => {
    return (
        <label className={style.label}>
            {children}
            <input
                type="text"
                className={style.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    );
};

export default Input;