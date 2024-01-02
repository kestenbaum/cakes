import {FC} from "react";

import FooterNavigate from "./FooterNavigate/FooterNavigate.tsx";
import FooterApp from "./FooterApp/FooterApp.tsx";
import FooterContact from "./FooterContact/FooterContact.tsx";

import style from "./Footer.module.css"
const Footer:FC = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                   <FooterNavigate/>
                   <FooterApp/>
                   <FooterContact/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;