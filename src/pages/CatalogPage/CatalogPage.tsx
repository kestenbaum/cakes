import React, {FC, useState} from 'react';

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {data} from "../../data";

import style from "../CatalogPage/CatalogPage.module.css"
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import {Link} from "react-router-dom";
import Slider from "../../components/Slider/Slider.tsx";

const CatalogPage:FC = () => {
    const path = window.location.pathname
    const getSetsCakes = data.sets
    const getNewsCakes = data.new_cakes
    const getCakes = data.cakes

    return (
        <div>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.catalog}>
                        <PathLink/>
                        <Link to={"/catalog/test"}>Test</Link>
                        <Slider array={getSetsCakes}/>
                        <Slider array={getNewsCakes}/>
                        <Slider array={getCakes}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CatalogPage;