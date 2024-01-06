import React, {FC} from 'react';

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import style from './ProductPage.module.css'
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import Product from "../../components/Product/Product.tsx";
const ProductPage:FC = () => {
    const path = window.location.pathname
    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.page}>
                        <PathLink/>
                        <Product/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductPage;