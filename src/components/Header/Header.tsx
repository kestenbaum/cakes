import {FC} from "react";

import Logo from "../Logo/Logo.tsx";
import {Menu, Navigate} from "./index.ts";
import style from "./Header.module.css"
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";


const Header:FC = () => {
    return (
        <header
            className={style.header}
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