import {FC} from "react";

import style from "./Footer.module.css"
const Footer:FC = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                    Footer
                </div>
            </div>
        </footer>
    );
};

export default Footer;