import React, {FC} from 'react';
import {IPruductTitle} from "../../../models";

import style from "./ProductTitle.module.css"
const ProductTitle:FC<IPruductTitle> = ({children}) => {
    return (
        <h1 className={style.wrapper}>
            {children}
        </h1>
    );
};

export default ProductTitle;