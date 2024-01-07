import React from 'react';

import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";

import style from "./Basket.module.css"
const BasketPage = () => {
    const path = window.location.pathname
    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.page}>
                        Basket
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default BasketPage;