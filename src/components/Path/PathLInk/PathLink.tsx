import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import PathElement from "../PathElement/PathElement.tsx";

import style from "./PathLink.module.css"
import {PrivateRouter} from "../../../router";
const PathLink:FC = () => {
    const path:string = window.location.pathname
    const [state, setState]:string = useState("")


    useEffect(() => {
        const res = PrivateRouter.find(item => item.path === path)
        setState(res.title)
    }, [path])

    return (
        <div className={style.wrapper}>
            <Link to={"/"} className={style.link}>Главная</Link>
            <PathElement children={state}/>
        </div>
    );
};

export default PathLink;