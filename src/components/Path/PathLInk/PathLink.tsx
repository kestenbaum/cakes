import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import PathElement from "../PathElement/PathElement.tsx";
import {PrivateRouter} from "../../../router";

import style from "./PathLink.module.css"
const PathLink:FC = () => {
    const path:string = window.location.pathname
    const [state, setState]:any = useState()


    useEffect(() => {
        const res = PrivateRouter.find(item => item.path === path)
        setState(res?.title)
    }, [path])

    return (
        <div className={style.wrapper}>
            <Link to={"/"} className={style.link}>Главная</Link>
            <PathElement children={state}/>
        </div>
    );
};

export default PathLink;