import React, {FC} from 'react';
import {Link} from "react-router-dom";

import style from "./PathElement.module.css"
import {IPathElement} from "../../../models";
const PathElement:FC<IPathElement> = ({children}) => {
    const path = window.location.pathname
    return (
        <div className={style.wrapper}>
            <div className={style.block}></div>
            <Link to={path} className={style.link}>{children}</Link>
        </div>
    );
};

export default PathElement;