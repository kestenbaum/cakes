import {FC} from "react";

import style from "./FirstScreen.module.css"
const FirstScreen:FC = () => {
    return (
        <div className={style.wrapper}>
            <a
                className={style.item}
                    href=""
            >
                <span
                    className={style.link}
                >
                    К сладостям
                </span>
            </a>
        </div>
    );
};

export default FirstScreen;