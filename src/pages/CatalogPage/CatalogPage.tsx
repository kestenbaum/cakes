import  {FC} from 'react';

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import Slider from "../../components/Slider/Slider.tsx";

import style from "../CatalogPage/CatalogPage.module.css"
import {sliderPage} from "../../data";

const CatalogPage:FC = () => {
    const path = window.location.pathname

    return (
        <div>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.catalog}>
                        <PathLink/>
                        {sliderPage.map(item =>
                                <Slider key={item.id} array={item.array} path={item.path}/>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CatalogPage;