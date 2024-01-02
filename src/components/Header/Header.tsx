import {FC} from "react";

import Logo from "../Logo/Logo.tsx";
import {Menu, Navigate} from "./index.ts";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu.tsx";
import {IHeader} from "../../models";

import style from "./Header.module.css"


const Header:FC<IHeader> = ({background}) => {

    return (
        <header
            className={style.header}
            style = {{
                background: background
            }}
        >
            <div className="container">
                <div className={style.wrapper}>
                    <Navigate/>
                    <Logo/>
                    <Menu/>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;