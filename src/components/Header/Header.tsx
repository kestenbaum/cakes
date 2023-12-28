import {FC} from "react";

import Logo from "../Logo/Logo.tsx";
import {Menu, Navigate} from "./index.ts";
import style from "./Header.module.css"
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu.tsx";
import {IHeader} from "../../models";


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