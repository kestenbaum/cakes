import {FC} from "react";
import {IButton} from "../../../../models";

import styles from './Button.module.css'
export const Button:FC<IButton> = ({children, ...rest}) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
        </button>
    );
};

