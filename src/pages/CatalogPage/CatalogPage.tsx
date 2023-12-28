import React, {FC} from 'react';

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {data} from "../../data";

import style from "../CatalogPage/CatalogPage.module.css"
import {Path} from "../../helper/path.ts";

const CatalogPage:FC = () => {
    const path = window.location.pathname
    const getSetsCakes = data.sets
    const getNewsCakes = data.new_cakes
    const getCakes = data.cakes
    const getPath = Path["/catalog"]

    return (
        <div>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.catalog}>
                        <div>
                            <div className={style.block_slider}>
                                <h2 className={style.title}>{getSetsCakes[0].tag}</h2>
                                <div className={style.block_arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M33.0762 18.5406V25.4496C33.0762 34.0276 27.0017 37.5402 19.5688 33.2513L13.572 29.7968L7.57515 26.3423C0.142198 22.0533 0.142198 15.0279 7.57515 10.7389L13.572 7.28445L19.5688 3.82997C27.0017 -0.459012 33.0762 3.05369 33.0762 11.6317V18.5406Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M1.92383 18.5404V11.6315C1.92383 3.05349 7.99827 -0.459187 15.4312 3.8298L21.428 7.28428L27.4249 10.7388C34.8578 15.0277 34.8578 22.0531 27.4249 26.3421L21.428 29.7966L15.4312 33.2511C7.99827 37.5401 1.92383 34.0274 1.92383 25.4494V18.5404Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={style.fake_slider}>
                                {getSetsCakes.map(item => {
                                    return <div>
                                        <img src={item.img} alt={item.name}/>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div>
                            <div className={style.block_slider}>
                                <h2 className={style.title}>{getNewsCakes[0].tag}</h2>
                                <div className={style.block_arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M33.0762 18.5406V25.4496C33.0762 34.0276 27.0017 37.5402 19.5688 33.2513L13.572 29.7968L7.57515 26.3423C0.142198 22.0533 0.142198 15.0279 7.57515 10.7389L13.572 7.28445L19.5688 3.82997C27.0017 -0.459012 33.0762 3.05369 33.0762 11.6317V18.5406Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M1.92383 18.5404V11.6315C1.92383 3.05349 7.99827 -0.459187 15.4312 3.8298L21.428 7.28428L27.4249 10.7388C34.8578 15.0277 34.8578 22.0531 27.4249 26.3421L21.428 29.7966L15.4312 33.2511C7.99827 37.5401 1.92383 34.0274 1.92383 25.4494V18.5404Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={style.fake_slider}>
                                {getNewsCakes.map(item => {
                                    return <div>
                                        <img src={item.img} alt={item.name}/>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div>
                            <div className={style.block_slider}>
                                <h2 className={style.title}>{getCakes[0].tag}</h2>
                                <div className={style.block_arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M33.0762 18.5406V25.4496C33.0762 34.0276 27.0017 37.5402 19.5688 33.2513L13.572 29.7968L7.57515 26.3423C0.142198 22.0533 0.142198 15.0279 7.57515 10.7389L13.572 7.28445L19.5688 3.82997C27.0017 -0.459012 33.0762 3.05369 33.0762 11.6317V18.5406Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                                        <path d="M1.92383 18.5404V11.6315C1.92383 3.05349 7.99827 -0.459187 15.4312 3.8298L21.428 7.28428L27.4249 10.7388C34.8578 15.0277 34.8578 22.0531 27.4249 26.3421L21.428 29.7966L15.4312 33.2511C7.99827 37.5401 1.92383 34.0274 1.92383 25.4494V18.5404Z" stroke="black" stroke-width="2.91108" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={style.fake_slider}>
                                {getCakes.map(item => {
                                    return <div>
                                        <img src={item.img} alt={item.name}/>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CatalogPage;