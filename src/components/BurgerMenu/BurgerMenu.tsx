import {FC} from "react";

import style from "./BurgerMenu.module.css"
const BurgerMenu:FC = () => {
    return (
        <div className={style.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21M3 12H21M3 17H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
    );
};

export default BurgerMenu;