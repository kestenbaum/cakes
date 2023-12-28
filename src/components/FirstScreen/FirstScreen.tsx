import {FC} from "react";
import {Link} from "react-router-dom";

import style from "./FirstScreen.module.css"
const FirstScreen:FC = () => {
    return (
        <div className={style.wrapper}>
            <Link
                className={style.item}
                to={"/catalog"}
            >
                <span
                    className={style.link}
                >
                    К сладостям
                </span>
            </Link>
        </div>
    );
};

export default FirstScreen;