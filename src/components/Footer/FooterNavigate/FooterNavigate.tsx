import {FC} from "react";
import {Link} from "react-router-dom";

import {footerNavigateData} from "../../../data";
import style from "./FooterNavigate.module.css"


const FooterNavigate: FC = () => {

    return (
        <div className={style.wrapper}>
            <ul
                className={style.list}
            >
                {footerNavigateData.catalog.map((element) => {
                    return (
                            <Link
                                key={element.id}
                                to={element.link}
                                className={style.link}
                            >
                                {element.title}
                            </Link>
                    );
                })}
            </ul>
            <ul
                className={style.list}
            >
                {footerNavigateData.store.map((element) => {
                    return (
                        <Link
                            key={element.id}
                            to={element.link}
                            className={style.link}
                        >
                            {element.title}
                        </Link>
                    );
                })}
            </ul>
            <ul
                className={style.list}
            >
                {footerNavigateData.client.map((element) => {
                    return (
                        <Link
                            key={element.id}
                            to={element.link}
                            className={style.link}
                        >
                            {element.title}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterNavigate;