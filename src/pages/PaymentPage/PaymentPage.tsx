import React, {FC} from 'react';

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import style from "./PaymentPage.module.css"
const PaymentPage:FC = () => {
    const path = window.location.pathname
    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.page}>
                        Payment
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PaymentPage;