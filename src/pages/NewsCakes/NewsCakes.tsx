import {FC} from "react";
import {Link} from "react-router-dom";

import Header from "../../components/Header/Header.tsx";
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import {data} from "../../data";
import style from "./NewsCakes.module.css";
import Dropdown from "../../components/Filters/Dropdown/Dropdown.tsx";
import FilterCakes from "../../components/Filters/FilterCakes/FilterCakes.tsx";


const NewsCakes:FC = () => {
    const path = window.location.pathname

    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <section className={style.page}>
                        <PathLink/>
                        <h1 className={style.title}>Новинки</h1>
                        <Dropdown/>
                        <div className={style.block}>
                            <div className={style.news}>
                                {data.new_cakes.map(cake => {
                                    return (
                                        <Link
                                            to={"/"}
                                            key={cake.id}
                                            className={style.new}>
                                            <img src={cake.img} alt={cake.description}/>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className={style.filter}>
                                <FilterCakes/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default NewsCakes;