import {FC} from "react";

import style from "./FooterContact.module.css"

const FooterContact:FC = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Контакты</h2>
            <a
                href="tel:+390876758734"
                className={style.phone}
            >
                +390876758734
            </a>
            <span className={style.text}>
                Бесплатный звонок по Украине
            </span>
        </div>
    );
};

export default FooterContact;